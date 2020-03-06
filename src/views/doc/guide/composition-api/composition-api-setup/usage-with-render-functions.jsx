// https://v3.vuejs.org/guide/composition-api-setup.html#usage-with-render-functions

import { onUnmounted, reactive, ref } from 'vue';

export default {
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

    /*----------------------------------------------------------------------------------------------------
     * setup() 可以直接返回一个 render function，
     *----------------------------------------------------------------------------------------------------*/
    return () => (
      <fieldset>
        <p>{ref01.value}</p>
        <p>{reactive01.prop01}</p>
      </fieldset>
    );
  },
};
