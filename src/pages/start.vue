<template>
  <div class="pos-relative w-100vw h-100vh">
    <img class="pos-absolute left-6 top-6" src="@/static/scatter.png" />
    <h1 class="pos-absolute left-64 top-25 text-center">
      质谱分子水平表征 <br />
      可视化数据处理软件
    </h1>
    <div class="pos-absolute right-6 bottom-4">
      <h4>兼容RIPPMS版本1.0</h4>
      <h4>版本： V1.0</h4>
      <h4>平台： WINDOWS</h4>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
onMounted(() => {
  // 打开主页面
  setTimeout(() => {
    router.push('/main');
    Niva.api.window.setDecorated(true); // 显示窗口装饰
    Niva.api.window.setResizable(true); // 可调整窗口大小
    Niva.api.window.setMinInnerSize({ width: 1660, height: 900 }, 0); // 设置窗口最小大小
    Niva.api.window.setInnerSize({ width: 1660, height: 900 }, 0); // 设置窗口大小
  }, 2000);
});
</script>

<style scoped>
.pos-relative {
  background-image: linear-gradient(-225deg, #7de2fc 0%, #b9b6e5 100%);
}
</style>
