import "@babel/polyfill";
import "./class-component-hooks";
import Vue from "vue";
import router from "./router";
import "./mock";
import { VueAxios } from "./utils/request";
import bootstrap from "./core/bootstrap";
import "./core/use";
import "./permission";
import "./utils/filter";
import { App } from "./app";
import store from "./store/";

Vue.config.silent = false;
Vue.config.devtools = true;
Vue.config.optionMergeStrategies["my-option-01"] = (parentVal, childVal, vm, key) => {
  return `${parentVal}-${childVal}`;
};

Vue.config.errorHandler = (e: Error, vm: Vue, info: string) => {
  console.log(`%c[Vue.config.errorHandler()]\n${e.message}`, "color:red");
};

Vue.config.warnHandler = (msg, vm, trace) => {
  console.error(`[Vue.config.warnHandler()]\n${msg}`, trace);
};

Vue.config.ignoredElements = ["c-01-06-01"];
Vue.config.keyCodes = { "lucky-eight": 56 };
Vue.config.performance = false;
Vue.config.productionTip = false;

Vue.use(VueAxios);

new Vue({
  // @ts-ignore
  router,
  store,
  created() {
    bootstrap();
  },
  render: h => h(App)
}).$mount("#app");
