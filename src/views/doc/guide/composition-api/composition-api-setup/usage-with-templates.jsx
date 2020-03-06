// https://v3.vuejs.org/guide/composition-api-setup.html#usage-with-templates

import { onUnmounted, ref, reactive } from 'vue';

export default {
  /*----------------------------------------------------------------------------------------------------
   * setup() 返回的对象叫 render context，它的属性可以在组件的其他地方使用，包括在 template 中使用，
   * 如果某个属性是 ref 对象，当它在 template 中使用时，会自动进行 unwrap，
   *----------------------------------------------------------------------------------------------------*/
  setup(props, context) {
    const ref01 = ref(0);
    const reactive01 = reactive({ prop01: 0 });

    const timer01 = setInterval(() => {
      ref01.value++;
      reactive01.prop01++;
    }, 1000);

    onUnmounted(() => {
      clearInterval(timer01);
    });

    return { ref01, reactive01 };
  },
  render() {
    return (
      <fieldset>
        <p>{this.ref01}</p>
        <p>{this.reactive01.prop01}</p>
      </fieldset>
    );
  },
};
