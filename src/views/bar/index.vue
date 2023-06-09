<template>
  <local-echarts :key="timer" :data="data" :series="series"></local-echarts>
</template>

<script setup>
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useDataStore } from '@/store/data.js';
import localEcharts from '@/components/localEcharts.vue';

// 时间戳控制组件更新
let timer = ref(new Date().getTime());

// 表格数据数据
const Data = useDataStore();

// 图表格式
const { length } = storeToRefs(Data);
const series = ref();
const chartStyle = () => {
  series.value = [];
  for (let i = 0; i < length.value; i++) {
    series.value.push({ type: 'bar' });
  }
};
chartStyle();

// 监听数据变化
const { data } = storeToRefs(Data);
watch(
  () => data,
  () => {
    chartStyle();
    timer.value = new Date().getTime();
  },
  { deep: true }
);
</script>
