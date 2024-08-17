import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './routers';
import App from './App.vue';
import 'uno.css';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');
