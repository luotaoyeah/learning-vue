import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import CompE from '@/components/CompE.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('CompE', CompE);

app.config.globalProperties.$log = console.log;

app.mount('#app');

// import.meta 如果出现在字符串中, 需要特殊处理, 否则打包报错,
// 参考: https://vitejs.dev/guide/env-and-mode.html#production-replacement
console.log('import.meta\u200b.env.MODE', import.meta.env.MODE);
console.log('import.meta\u200b.env.DEV', import.meta.env.DEV);
console.log('import.meta\u200b.env.PROD', import.meta.env.PROD);
console.log('import.meta\u200b.env.BASE_URL', import.meta.env.BASE_URL);
console.log('import.meta\u200b.env.VITE_FOO', import.meta.env.VITE_FOO);
console.log('import.meta\u200b.env.BAR', import.meta.env.BAR);
console.log('import.meta\u200b.env.VITE_FOO_BAZ', import.meta.env.VITE_FOO_BAZ);
