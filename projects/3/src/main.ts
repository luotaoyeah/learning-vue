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
