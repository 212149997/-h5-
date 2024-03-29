import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index'; //引入路由
import '@/styles/reset.scss'; //引入清除默认样式
import '@/styles/common.scss'; //引入清除默认样式

const app = createApp(App);
app.use(router);
app.mount('#app');
