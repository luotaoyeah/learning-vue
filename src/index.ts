import Vue, { CreateElement } from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./components/index.vue";
import router from "./router";
import _, { LoDashStatic } from "lodash";
import "vue-router/types/vue";

/*
 * 将 lodash 添加为 vue 的全局属性；
 */
declare module "vue/types/vue" {
  interface VueConstructor {
    _: LoDashStatic;
  }
}

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
Vue.config.keyCodes = { "lucky-eight": 56 };
Vue.config.performance = false;
Vue.config.productionTip = true;

Vue.use(ElementUI, { size: "small" });

new Vue({
  router,
  components: { App },
  render(h: CreateElement) {
    return h(App);
  },
  data() {
    return {
      message: "hello world"
    };
  }
}).$mount("#app");
