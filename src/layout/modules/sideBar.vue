<template>
  <n-menu :options="menuOptions" :default-value="route" />
</template>

<script setup>
import { h } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import SvgIcon from '@/components/SvgIcon.vue';

// 获取侧边栏的路由列表
const menuOptions = [];
const router = useRouter();
const routes = router.options.routes.find((item) => item.path === '/').children;
routes.forEach((item) => {
  menuOptions.push({
    label: () => h(RouterLink, { to: { path: '/' + item.path } }, { default: () => item.meta.title }),
    key: item.path,
    icon: () => h(SvgIcon, { name: item.meta.icon }, null),
  });
});
// 获取当前路由
let route = router.currentRoute.value.name;
</script>
