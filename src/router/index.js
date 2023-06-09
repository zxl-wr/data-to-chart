import { createRouter, createWebHistory } from 'vue-router';
import index from '../layout/index.vue';

export const routes = [
  {
    path: '/',
    component: index,
    redirect: '/bar',
    children: [
      {
        path: 'bar',
        name: 'bar',
        component: () => import('@/views/bar/index.vue'),
        meta: { title: '柱状图', icon: 'Bar' },
      },
      {
        path: 'line',
        name: 'line',
        component: () => import('@/views/line/index.vue'),
        meta: { title: '折线图', icon: 'Line' },
      },
      {
        path: 'scatter',
        name: 'scatter',
        component: () => import('@/views/scatter/index.vue'),
        meta: { title: '气泡图', icon: 'Scatter' },
      },
    ],
  },
  {
    path: '/:cathchAll(.*)', // 不识别的path自动匹配404
    component: () => import('@/views/404.vue'),
    hidden: true,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
