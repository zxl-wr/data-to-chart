import start from '@/pages/start.vue';
import main from '@/pages/main.vue';

const routes = [
  { path: '/', component: start },
  { path: '/main', component: main },
];

import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { routes, router };
