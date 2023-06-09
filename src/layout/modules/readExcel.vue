<template>
  <input ref="upload" class="upload" type="file" accept=".xls,.xlsx,.csv" @change="uploadFile" />
  <div class="uploadSurface">
    <svg-icon name="Upload" size="4em"></svg-icon>
    <p>点击或者拖动文件到该区域来上传</p>
  </div>
  <n-tag v-if="fileName" type="success" closable @close="handleClose"> {{ fileName }} </n-tag>
</template>

<script setup>
import { ref } from 'vue';
import { read, utils } from 'xlsx';
import { useDataStore } from '@/store/data.js';
import SvgIcon from '@/components/SvgIcon.vue';

// 上传组件
const upload = ref(null);
// 上传文件名
const fileName = ref(null);
// 上传文件
const uploadFile = (e) => {
  const files = e.target.files;
  // 取得文件名称
  fileName.value = files[0].name;
  // 如果没有文件名
  if (files.length <= 0) {
    return false;
  } else if (!/\.(xls|xlsx|csv)$/.test(files[0].name.toLowerCase())) {
    console.log('上传格式不正确,请上传xls、xlsx、csv格式');
    return false;
  }
  // 上传成功,读取文件
  readFile(files);
};

// 读取文件
const Data = useDataStore();
const readFile = (files) => {
  const fileReader = new FileReader();
  fileReader.onload = (ev) => {
    try {
      const res = ev.target.result;
      const workbook = read(res, { type: 'binary' }); // 以二进制流方式读取得到整份 excel 表格对象
      const wsname = workbook.SheetNames[0]; // 取第一张表,获取表名
      const ws = utils.sheet_to_json(
        workbook.Sheets[wsname],
        { header: 'A', raw: true, defval: 0 } // 意思是从头开始匹配，如遇到空格，将跳过执行，并替换为""字符串。
      );
      Data.handleData(ws);
    } catch (e) {
      return false;
    }
  };
  fileReader.readAsBinaryString(files[0]);
};

// 删除文件
const handleClose = () => {
  fileName.value = null;
  upload.value.value = null;
  Data.$reset();
};
</script>

<style scoped>
.upload {
  width: 100%;
  height: 120px;
  opacity: 0;
  z-index: 1;
}
.uploadSurface {
  margin-top: -120px;
  padding-top: 16px;
  width: 100%;
  height: 104px;
  border: 1px dashed;
  background-color: #f3f4fa;
  text-align: center;
}
.n-tag {
  margin-top: 16px;
}
</style>
