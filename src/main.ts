import App from '@/app.vue';
import '@/index.less';
import router from '@/router';
import store from '@/store';
import { createApp } from 'vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
