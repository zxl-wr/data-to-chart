import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import { createPinia } from 'pinia'; // pinia 全局状态管理，代替 vuex
import 'virtual:svg-icons-register'; // svg 雪碧图

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount('#app');
