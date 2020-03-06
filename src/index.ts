import "./class-component-hooks";
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
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

Vue.config.errorHandler = (e: Error, vm: Vue, info: string) => {
  console.log(`%c[Vue.config.errorHandler()]\n${e.message}`, "color:red");
};

Vue.config.warnHandler = (msg, vm, trace) => {
  console.error(`[Vue.config.warnHandler()]\n${msg}`, trace);
};

Vue.config.ignoredElements = ["c-01-06-01"];
Vue.config.keyCodes = { "lucky-eight": 56 };
Vue.config.performance = false;
Vue.config.productionTip = true;

Vue.use(ElementUI, { size: "small" });

new Vue({
  template: "<router-view></router-view>",
  data() {
    return {
      message: "hello world"
    };
  },
  router
}).$mount("#app");
