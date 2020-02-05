import App from '@/app.vue';
import router from '@/router';
import store from '@/store';
import { Button } from 'ant-design-vue';
import { createApp } from 'vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.use(Button);

app.mount('#app');
