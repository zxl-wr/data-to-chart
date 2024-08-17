<template>
  <div class="w-100% h-100% bg-#eee">
    <div ref="main" class="w-100% h-100%"></div>
  </div>
</template>

<script setup>
const option = {
  grid: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  title: {
    text: '',
    textStyle: { color: '', fontSize: 0 },
    top: 0,
    left: 0,
  },
  xAxis: {
    name: '',
    nameLocation: 'center',
    nameTextStyle: {},
    axisLabel: { fontSize: 0 },
    axisLine: { onZero: true, lineStyle: { width: 0, color: '' } },
    axisTick: { lineStyle: { width: 0 } },
    splitLine: false,
    interval: 1,
    min: 0,
    max: 0,
  },
  yAxis: {
    name: '',
    nameLocation: 'center',
    nameTextStyle: {},
    axisLabel: { fontSize: 0 },
    axisLine: { onZero: true, lineStyle: { width: 0, color: '' } },
    axisTick: { lineStyle: { width: 0 } },
    splitLine: false,
    interval: 1,
    min: 0,
    max: 0,
  },

  series: { data: [], type: 'scatter' },
  visualMap: { type: 'continuous', padding: 0, borderColor: '#000', borderWidth: 0 },
  toolbox: { feature: { saveAsImage: {} } },
};

import { useDataStore } from '../stores/data';
const store = useDataStore();
// 数据
option.series.data = store.chartsData;
// 图像边距
option.grid['top'] = store.optionChartPadding;
option.grid['right'] = store.optionChartPadding;
option.grid['bottom'] = store.optionChartPadding;
option.grid['left'] = store.optionChartPadding;
// 标题
option.title.text = store.optionTitleText;
option.title.textStyle.color = store.optionTitleColor;
option.title.textStyle.fontSize = store.optionTitleFontsize;
option.title.top = store.optionTitleTop;
option.title.left = store.optionTitleLeft;
// X轴
option.xAxis.name = store.optionXaxisName;
option.xAxis.interval = store.optionXaxisInterval;
option.xAxis.min = store.optionXaxisMin;
option.xAxis.max = store.optionXaxisMax;
// Y轴
option.yAxis.name = store.optionYaxisName;
option.yAxis.interval = store.optionYaxisInterval;
option.yAxis.min = store.optionYaxisMin;
option.yAxis.max = store.optionYaxisMax;
// 坐标轴原点是否固定
option.xAxis.axisLine.onZero = store.optionAxisOnZero;
option.yAxis.axisLine.onZero = store.optionAxisOnZero;
// 轴线颜色
option.xAxis.axisLine.lineStyle.color = store.optionAxisColor;
option.yAxis.axisLine.lineStyle.color = store.optionAxisColor;
// 轴名称颜色
option.xAxis.nameTextStyle.color = store.optionAxisNameColor;
option.yAxis.nameTextStyle.color = store.optionAxisNameColor;
// 轴名称字号
option.xAxis.nameTextStyle.fontSize = store.optionAxisNameFontsize;
option.yAxis.nameTextStyle.fontSize = store.optionAxisNameFontsize;
// 轴名称离轴距离
option.xAxis.nameTextStyle.padding = [store.optionAxisNamePadding, 0, 0, 0];
option.yAxis.nameTextStyle.padding = [0, 0, store.optionAxisNamePadding, 0];
// 轴线宽度
option.xAxis.axisTick.lineStyle.width = store.optionAxisWidth;
option.xAxis.axisLine.lineStyle.width = store.optionAxisWidth;
option.yAxis.axisTick.lineStyle.width = store.optionAxisWidth;
option.yAxis.axisLine.lineStyle.width = store.optionAxisWidth;
// 轴线颜色
option.xAxis.axisLine.lineStyle.color = store.optionAxisColor;
option.yAxis.axisLine.lineStyle.color = store.optionAxisColor;
// 轴线刻度字号
option.xAxis.axisLabel.fontSize = store.optionAxisFontsize;
option.yAxis.axisLabel.fontSize = store.optionAxisFontsize;
// 视觉映射边框宽度
option.visualMap.borderWidth = store.optionVisualMapBorderWidth;
// 视觉映射宽度
option.visualMap.itemWidth = store.optionVisualMapWidth;
option.visualMap.top = store.optionChartPadding;
option.visualMap.right = store.optionChartPadding - store.optionVisualMapWidth * 1.5;
// 视觉映射颜色
option.visualMap.color = store.optionVisualMapColor;
//视觉映射最大最小值
option.visualMap.min = store.optionVisualMapMin;
option.visualMap.max = store.optionVisualMapMax;

import * as echarts from 'echarts/core'; // 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import { ScatterChart, BarChart } from 'echarts/charts'; // 引入柱状图图表，图表后缀都为 Chart
import { TitleComponent, VisualMapComponent, ToolboxComponent } from 'echarts/components'; // 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import { CanvasRenderer } from 'echarts/renderers'; // 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
echarts.use([ScatterChart, BarChart, TitleComponent, VisualMapComponent, ToolboxComponent, CanvasRenderer]); // 注册必须的组件
const main = ref();
onMounted(() => {
  const myChart = echarts.init(main.value, null, { locale: 'ZH' }); // 基于准备好的dom，初始化echarts实例
  option.visualMap.itemHeight = myChart.getHeight() - 2 * store.optionChartPadding; // 视觉映射高度
  window.onresize = () => {
    myChart.resize(); // 重置大小
    myChart.setOption({
      visualMap: [{ itemHeight: myChart.getHeight() - 2 * store.optionChartPadding }],
    }); // 重绘视觉映射高度
  };
  myChart.setOption(option); // 使用刚指定的配置项和数据显示图表。
});
</script>
