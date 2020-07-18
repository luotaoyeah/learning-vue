import Vue from 'vue';
import App from './App.vue';
import { FooPlugin } from './plugins/foo.plugin';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(FooPlugin, { x: 1 });

new Vue({
  router,
  store,
  render: (h) => h(App),
  data: { foo: 'foo' },
}).$mount('#app');
