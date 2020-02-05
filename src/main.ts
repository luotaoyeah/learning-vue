import App from '@/app.vue';
import router from '@/router';
import store from '@/store';
import { Button, Layout, Menu } from 'ant-design-vue';
import { createApp } from 'vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.use(Layout);
app.use(Button);
app.use(Menu);

app.mount('#app');
