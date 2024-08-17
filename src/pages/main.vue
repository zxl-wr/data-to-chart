<template>
  <div class="flex h-100vh">
    <n-card class="w-800px" title="配置">
      <ReadExcel></ReadExcel>
      <Option></Option>
    </n-card>
    <n-card class="flex-1" title="气泡量化变色分布图">
      <ScatterChart :key="timer"></ScatterChart>
    </n-card>
  </div>
</template>

<script setup>
import ReadExcel from '@/components/readExcel.vue';
import Option from '@/components/option.vue';
import ScatterChart from '@/components/scatter-chart.vue';

// 图表配置数据
import { useDataStore } from '@/stores/data';
const store = useDataStore();

// 时间戳控制组件更新
let timer = ref(new Date().getTime());
// 监听数据变化
watch(
  () => store,
  () => {
    timer.value = new Date().getTime();
  },
  { deep: true }
);
</script>
