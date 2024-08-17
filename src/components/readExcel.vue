<template>
  <n-upload :max="1" accept=".xls,.xlsx,.csv" @update:file-list="uploadeFile">
    <n-button type="info"> 导入数据 </n-button>
  </n-upload>
</template>

<script setup>
import { useDataStore } from '../stores/data';
const store = useDataStore();
// 处理数据
import { objArrTo2dArr, ArrKeepDecimal } from '../utils/handleData';
const handleData = (ws) => {
  let _arr = objArrTo2dArr(ws); // 先转化为二维数组
  _arr = ArrKeepDecimal(_arr, 3); // 所有数据保存三位小数
  console.log(_arr);
  let _min = 0;
  let _max = 0;
  let _data = [];
  for (let i = 1; i < _arr.length; i++) {
    for (let j = 1; j < _arr[i].length; j++) {
      if (_arr[i][j] == 0) continue; // 值为 0 不显示
      _data.push([_arr[i][0], _arr[0][j], _arr[i][j]]);
      if (_arr[i][j] < _min) _min = _arr[i][j]; // 最小值
      if (_arr[i][j] > _max) _max = _arr[i][j]; // 最大值
      if (_arr[i][0] > store.optionXaxisMax) store.optionXaxisMax = parseInt(_arr[i][0]) + 5; // X轴最大值
      if (_arr[0][j] > store.optionYaxisMax) store.optionYaxisMax = parseInt(_arr[0][j]) + 5; // Y轴最大值
    }
  }
  store.chartsData = _data;
  store.optionVisualMapMin = _min;
  store.optionVisualMapMax = _max;

  // 新增X、Y轴柱状图数据
  let _data_bar_x = [];
  let _data_bar_y = [];
  let _data_bar_z = [];
  for (let i = 1; i < _data_bar_x.length; i++) {
    for (let j = 1; j < _arr.length; j++) {
      if (!_data_bar_z[i]) _data_bar_z[i] = 0;
      _data_bar_z[i] += _arr[j][i];
    }
    _data_bar_z[i] = parseFloat(_data_bar_z[i].toFixed(3));
  }
  store.chartsDataBarX = _data_bar_x;
  store.chartsDataBarY = _data_bar_y;
  store.chartsDataBarZ = _data_bar_z;
};
// 读取数据
import { read, utils } from 'xlsx';
const fileReader = new FileReader();
fileReader.onload = (file) => {
  try {
    const res = file.target?.result;
    const workbook = read(res, {
      type: 'binary',
    }); // 以二进制流方式读取得到整份 excel 表格对象
    const wsname = workbook.SheetNames[0]; // 取第一张表,获取表名
    const ws = utils.sheet_to_json(
      workbook.Sheets[wsname],
      {
        header: 'A',
        raw: true,
        defval: 0,
      } // 意思是从头开始匹配，如遇到空格，将跳过执行，并替换为""字符串。
    );
    handleData(ws); // 处理数据
  } catch (err) {
    console.log(err);
  }
};
// 上传数据
const uploadeFile = (e) => {
  store.chartsData = [];
  if (e.length <= 0) return;
  const file = e[0].file; // 获取文件信息
  fileReader.readAsBinaryString(file); // 读取文件
};
</script>
