<template>
  <n-input-group>
    <n-input-group-label>X名称</n-input-group-label>
    <n-input
      v-model:value="xName"
      type="text"
      placeholder="自定义横坐标名" />
  </n-input-group>
  <n-input-group>
    <n-input-group-label>Y名称</n-input-group-label>
    <n-input
      v-model:value="yName"
      type="text"
      placeholder="自定义纵坐标名" />
  </n-input-group>
  <n-input-group>
    <n-input-group-label>X最小值</n-input-group-label>
    <n-input-number v-model:value="xMin" />
  </n-input-group>
  <n-input-group>
    <n-input-group-label>X最大值</n-input-group-label>
    <n-input-number v-model:value="xMax" />
  </n-input-group>
  <n-input-group>
    <n-input-group-label>Y最小值</n-input-group-label>
    <n-input-number v-model:value="yMin" />
  </n-input-group>
  <n-input-group>
    <n-input-group-label>Y最大值</n-input-group-label>
    <n-input-number v-model:value="yMax" />
  </n-input-group>
  <n-input-group>
    <n-input-group-label>X步长</n-input-group-label>
    <n-input-number v-model:value="xInterval" />
  </n-input-group>
  <n-input-group>
    <n-input-group-label>Y步长</n-input-group-label>
    <n-input-number v-model:value="yInterval" />
  </n-input-group>
  <n-input-group>
    <n-input-group-label>标题</n-input-group-label>
    <n-input
      v-model:value="title"
      type="text"
      placeholder="标题" />
  </n-input-group>
  <local-echarts
    :key="timer"
    :data="arr"
    :series="series"
    :visualMap="visualMap"
    :formatter="formatter"
    :yName="yName"
    :xName="xName"
    :xMin="xMin"
    :xMax="xMax"
    :yMin="yMin"
    :yMax="yMax"
    :xInterval="xInterval"
    :yInterval="yInterval"
    :title="title"></local-echarts>
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
const { data } = storeToRefs(Data);
let arr = ref([]);
let min; // 最小值
let max; // 最大值
const chartDate = () => {
  arr.value = [];
  min = 0;
  max = 0;
  for (let i = 1; i < data.value.length; i++) {
    for (let j = 1; j < data.value[i].length; j++) {
      arr.value.push([data.value[i][0], data.value[0][j], data.value[i][j]]);
      if (data.value[i][j] < min) min = data.value[i][j];
      if (data.value[i][j] > max) max = data.value[i][j];
    }
  }
};
chartDate();
// 监听数据变化
watch(
  () => data,
  () => {
    chartDate();
    chartStyle();
    timer.value = new Date().getTime();
  },
  { deep: true }
);

// 图表格式
const series = ref([{ type: 'scatter' }]);
const formatter = (param) => {
  return '(' + param.value[0] + ',' + param.value[1] + ') = ' + param.value[2];
};
const visualMap = ref({});
const chartStyle = () => {
  visualMap.value = [
    {
      left: '72%',
      top: '8%',
      min: min,
      max: max,
      text: [100, 0],
      inRange: {
        // color: [['#ffffff', '#000000', '#ff00ff', '#0000ff', '#00ff00', '#ffff00', '#ff7b00', '#ff0000']],
        color: ['#ffffff', '#0b0b0b', '#5D3FD3', '#0000CD', '#6495E1', '#98ff98', '#39ff14', '#195905', '#FFFF00', '#f07427', '#D2042D'],
      },
      orient: 'horizontal',
    },
  ];
};
chartStyle();

const xName = ref(''); // 横坐标名称
const yName = ref(''); // 纵坐标名称
const xMin = ref(0); // 横坐标最小值
const xMax = ref(0); // 横坐标最大值
const yMin = ref(0); // 横坐标最小值
const yMax = ref(0); // 横坐标最大值
const xInterval = ref(10); // 横坐标步长
const yInterval = ref(10); // 纵坐标步长
const title = ref(''); // 标题
watch(
  () => [xName, yName, xMin, xMax, yMin, yMax, xInterval,yInterval, title],
  () => {
    chartStyle();
    timer.value = new Date().getTime();
  },
  { deep: true }
);
</script>

<style scoped>
.n-input-group {
  margin: 0 4px 4px;
  width: 200px;
  font-size: 12px;
}
</style>
