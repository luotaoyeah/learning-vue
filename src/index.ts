import Vue, { CreateElement } from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { App } from "./components/App";
import router from "./router";
import "vue-router";

Vue.config.silent = false;
Vue.config.devtools = true;
Vue.config.optionMergeStrategies["my-option-01"] = (
  parentVal,
  childVal,
  vm,
  key
) => {
  return `${parentVal}-${childVal}`;
};

/*
  Vue.config.errorHandler = (e: Error, vm: Vue, info: string) => {
    console.log("Vue.config.errorHandler():", e.message);
  };
*/

/*
  Vue.config.warnHandler = (msg, vm, trace) => {
    console.error(msg, trace);
  };
*/

Vue.config.ignoredElements = ["my-ignored-element"];
Vue.config.keyCodes = { "lucky-eight": 56 };
Vue.config.performance = false;
Vue.config.productionTip = true;

Vue.use(ElementUI, { size: "small" });

new Vue({
  render: (h: CreateElement) => h(App),
  data() {
    return {
      message: "hello world"
    };
  },
  router
}).$mount("#app");
