<template>
  <n-input-group>
    <n-input-group-label> 图表边距 </n-input-group-label>
    <n-input-number v-model:value="store.optionChartPadding" />
  </n-input-group>
  <n-card class="m-t-1" title="标题">
    <n-input v-model:value="store.optionTitleText" type="text" />
    <n-input-group>
      <n-input-group-label> 颜色 </n-input-group-label>
      <n-color-picker class="w-25%" v-model:value="store.optionTitleColor" :modes="['hex']" :show-alpha="false" />
      <n-input-group-label> 字号 </n-input-group-label>
      <n-input-number v-model:value="store.optionTitleFontsize" />
      <n-input-group-label> 上边距 </n-input-group-label>
      <n-input-number v-model:value="store.optionTitleTop" />
      <n-input-group-label> 左边距 </n-input-group-label>
      <n-input-number v-model:value="store.optionTitleLeft" />
    </n-input-group>
  </n-card>

  <n-card class="m-t-1" title="X/Y轴">
    <n-input v-model:value="store.optionXaxisName" type="text" />
    <n-input-group>
      <n-input-group-label> X轴步长 </n-input-group-label>
      <n-input-number v-model:value="store.optionXaxisInterval" />
      <n-input-group-label> X轴最小值 </n-input-group-label>
      <n-input-number v-model:value="store.optionXaxisMin" />
      <n-input-group-label> X轴最大值 </n-input-group-label>
      <n-input-number v-model:value="store.optionXaxisMax" />
    </n-input-group>
    <n-input v-model:value="store.optionYaxisName" type="text" />
    <n-input-group>
      <n-input-group-label> Y轴步长 </n-input-group-label>
      <n-input-number v-model:value="store.optionYaxisInterval" />
      <n-input-group-label> Y轴最小值 </n-input-group-label>
      <n-input-number v-model:value="store.optionYaxisMin" />
      <n-input-group-label>Y 轴最大值 </n-input-group-label>
      <n-input-number v-model:value="store.optionYaxisMax" />
    </n-input-group>
    <n-input-group>
      <n-input-group-label> 轴名称颜色 </n-input-group-label>
      <n-color-picker class="w-25%" v-model:value="store.optionAxisNameColor" :modes="['hex']" :show-alpha="false" />
      <n-input-group-label> 轴名称字号 </n-input-group-label>
      <n-input-number v-model:value="store.optionAxisNameFontsize" />
      <n-input-group-label> 离轴距离 </n-input-group-label>
      <n-input-number v-model:value="store.optionAxisNamePadding" />
    </n-input-group>
    <n-input-group>
      <n-input-group-label> 轴刻度颜色 </n-input-group-label>
      <n-color-picker class="w-25%" v-model:value="store.optionAxisColor" :modes="['hex']" :show-alpha="false" />
      <n-input-group-label> 轴刻度字号 </n-input-group-label>
      <n-input-number v-model:value="store.optionAxisFontsize" />
      <n-input-group-label> 轴线宽度 </n-input-group-label>
      <n-input-number v-model:value="store.optionAxisWidth" />
    </n-input-group>
    <n-input-group-label> 坐标轴原点是否固定</n-input-group-label> &nbsp;
    <n-switch v-model:value="store.optionAxisOnZero" />
    <n-alert type="info"> 只在坐标轴有(0,0)点时有效 </n-alert>
  </n-card>

  <n-card class="m-t-1" title="视觉映射">
    <n-input-group>
      <n-input-group-label> 宽度 </n-input-group-label>
      <n-input-number v-model:value="store.optionVisualMapWidth" />
      <n-input-group-label> 边框宽度 </n-input-group-label>
      <n-input-number v-model:value="store.optionVisualMapBorderWidth" />
    </n-input-group>
  </n-card>
</template>

<script setup>
import { useDataStore } from '../stores/data';
const store = useDataStore();
</script>
