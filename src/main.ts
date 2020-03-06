import App from '@/app';
import '@/index.less';
import router from '@/router';
import store from '@/store';
import { I18nPlugin } from '@/views/doc/guide/plugins/i18n.plugin';
import { createApp } from 'vue';
import tButton from './component/t-button';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(I18nPlugin, {
  hello: '你好',
});

app.component('t-button', tButton);

app.mount('#app');
