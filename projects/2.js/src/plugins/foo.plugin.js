import { PluginObject } from 'vue';

/** @type { PluginObject } */
const FooPlugin = {
  install(Vue, options) {
    Vue.prototype.__fn01 = function () {
      console.log('__fn01() is defined in FooPlugin');
    };
    console.assert(options.x === 1);
  },
};

export { FooPlugin };
