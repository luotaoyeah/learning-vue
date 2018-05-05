// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import _ from "lodash";
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./components/index";
import router from "./router";

Vue._ = _;
Object.defineProperties(Vue.prototype, {
  _: {
    get() {
      return _;
    }
  }
});

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
Vue.config.errorHandler = (e, vm, info) => {
  console.log("Vue.config.errorHandler():", e.message);
};
*/

/*
  Vue.config.warnHandler = (msg, vm, trace) => {
    console.error(msg, trace);
  };
*/

Vue.config.ignoredElements = ["my-ignored-element"];

Vue.config.keyCodes = {
  "lucky-eight": 56
};

Vue.config.performance = false;

Vue.config.productionTip = true;

Vue.use(ElementUI, { size: "small" });

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  data() {
    return {
      message: "hello world"
    };
  }
});
