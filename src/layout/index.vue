<template>
  <n-layout has-sider>
    <n-layout-sider :width="210">
      <side-bar></side-bar>
    </n-layout-sider>
    <n-layout-content>
      <n-card title="图表">
        <router-view :key="key"></router-view>
      </n-card>
      <n-card title="数据">
        <form-data></form-data>
      </n-card>
    </n-layout-content>
  </n-layout>
</template>
<script setup>
import SideBar from './modules/sideBar.vue';
import FormData from './modules/formData.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const key = computed(() => {
  return route.path;
});
</script>

<style lang="scss" scoped>
.n-layout {
  min-height: 100vh;
  .n-layout-sider {
    background-color: #fff;
  }
  .n-layout-content {
    padding: 16px;
    background-color: #f3f4fa;
    :deep(.n-layout-scroll-container) {
      display: grid;
      gap: 16px;
      grid-template-columns: minmax(0px, 2fr) minmax(0px, 1fr);
    }
  }
}
</style>
