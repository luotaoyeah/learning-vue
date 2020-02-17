import App from '@/app.vue';
import '@/index.less';
import router from '@/router';
import store from '@/store';
import { createApp } from 'vue';
import tButton from './component/t-button.vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.component('t-button', tButton);

app.mount('#app');
