import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', () => {
  const chartsData = ref([]); // 数据
  const chartsDataBarX = ref([]);
  const chartsDataBarY = ref([]);
  const chartsDataBarZ = ref([]);

  const optionChartPadding = ref(120); // 图表边距

  const optionTitleText = ref('图表标题'); // 图表标题
  const optionTitleColor = ref('#000000'); // 标题颜色
  const optionTitleFontsize = ref(32); // 标题字体大小
  const optionTitleTop = ref(120); // 标题上边距
  const optionTitleLeft = ref(120); // 标题左边距

  const optionXaxisName = ref('X轴名称'); // X轴名称
  const optionXaxisInterval = ref(5); // X轴线步长
  const optionXaxisMin = ref(0); // X轴线最小值
  const optionXaxisMax = ref(10); // X轴线最大值

  const optionYaxisName = ref('Y轴名称'); // Y轴名称
  const optionYaxisInterval = ref(5); // Y轴线步长
  const optionYaxisMin = ref(0); // Y轴线最小值
  const optionYaxisMax = ref(10); // Y轴线最大值

  const optionAxisNameColor = ref('#000000'); // 轴名称颜色
  const optionAxisNameFontsize = ref(32); // 轴名称字体大小
  const optionAxisNamePadding = ref(32); // 轴名称离轴距离

  const optionAxisWidth = ref(4); // 轴线宽度
  const optionAxisColor = ref('#000000'); // 轴线颜色
  const optionAxisFontsize = ref(32); // 轴线刻度字体大小

  const optionAxisOnZero = ref(false); // 坐标轴原点是否固定

  const optionVisualMapBorderWidth = ref(4); // 视觉映射边框宽度
  const optionVisualMapWidth = ref(20); // 视觉映射宽度
  // 视觉映射颜色
  const optionVisualMapColor = ref(['#d2042d', '#f07427', '#ffff00', '#195905', '#39ff14', '#98ff98', '#6495e1', '#0000cd', '#5d3fd3', '#0b0b0b', '#ffffff']);
  const optionVisualMapMin = ref(0); // 视觉映射最小值
  const optionVisualMapMax = ref(0); // 视觉映射最大值

  return {
    chartsData,
    chartsDataBarX,
    chartsDataBarY,
    chartsDataBarZ,
    optionChartPadding,

    optionTitleText,
    optionTitleColor,
    optionTitleFontsize,
    optionTitleTop,
    optionTitleLeft,

    optionXaxisName,
    optionXaxisInterval,
    optionXaxisMin,
    optionXaxisMax,

    optionYaxisName,
    optionYaxisInterval,
    optionYaxisMin,
    optionYaxisMax,

    optionAxisNameColor,
    optionAxisNameFontsize,
    optionAxisNamePadding,

    optionAxisWidth,
    optionAxisColor,
    optionAxisFontsize,

    optionAxisOnZero,

    optionVisualMapBorderWidth,
    optionVisualMapWidth,
    optionVisualMapColor,
    optionVisualMapMin,
    optionVisualMapMax,
  };
});
