<template>
  <div class="box">
    <div ref="main" class="main"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const prop = defineProps({
  data: Array,
  series: Array,
  visualMap: { default: false },
  formatter: { default: false },
  yName: String,
  xName: String,
  xMin: Number,
  xMax: Number,
  yMin: Number,
  yMax: Number,
  xInterval: Number,
});

// 基础组件
const main = ref(null); // 图表ref
const option = {
  legend: {}, // 图例组件
  tooltip: {}, // 提示框组件
  toolbox: {
    feature: {
      saveAsImage: {}, // 保存图片
      dataZoom: {}, // 选择区域
      dataView: {}, // 数据视图
      restore: {}, // 重置
    },
  }, // 工具栏
  textStyle: {
    fontFamily: 'Arial',
  },
};
// 横坐标
const xName = {
  name: prop.xName,
  nameLocation: 'center',
  nameTextStyle: {
    fontSize: '24px',
    padding: [30, 0, 0],
  },
};
// 纵坐标
const yName = {
  name: prop.yName,
  nameRotate: '90',
  nameLocation: 'center',
  nameTextStyle: {
    fontSize: '24px',
    padding: [0, 0, 30],
  },
};
let type = 'category';
if (prop.series[0].type == 'scatter') type = 'value';
option['xAxis'] = {
  type,
  scale: true,
  splitLine: false,
  ...xName,
  axisLine: { lineStyle: { width: 5 } },
  axisTick: { lineStyle: { width: 5 } },
  axisLabel: { fontSize: 24 },
  interval: prop.xInterval,
};
if (prop.xMin) option.xAxis.min = prop.xMin;
if (prop.xMax) option.xAxis.max = prop.xMax;
option['yAxis'] = { type: 'value', scale: true, splitLine: false, ...yName, axisLine: { lineStyle: { width: 5 } }, axisTick: { lineStyle: { width: 5 } }, axisLabel: { fontSize: 24 } };
if (prop.yMin) option.yAxis.min = prop.yMin;
if (prop.yMax) option.yAxis.max = prop.yMax;
// 数据集
option['dataset'] = { source: prop.data };
// 图表形式
option['series'] = prop.series;
if (prop.visualMap) {
  option['visualMap'] = prop.visualMap;
}
if (prop.formatter) {
  option.tooltip.formatter = prop.formatter;
}
option['title'] = [
  {
    text: 'Relative Abundance(%)',
    left: '72%',
    top: '12%',
    textStyle: { fontSize: 16 },
  },
  {
    text: '32156',
    left: '16%',
    top: '8%',
    textStyle: { fontSize: 32 },
  },
];

// 绘制图表
onMounted(() => {
  const myChart = echarts.init(main.value, null, { locale: 'ZH' }); // 挂载实例
  window.onresize = () => {
    myChart.resize(); // 重置大小
  };
  myChart.setOption(option); // 绘制图表
});
</script>

<style scoped>
.box {
  margin: 4px 0 0;
  padding: 4px;
  width: calc(100% - 8px);
  height: 80%;
  border: 1px solid #999;
}

.main {
  width: auto;
  height: 100%;
}
</style>
