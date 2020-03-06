// https://v3.vuejs.org/guide/reactivity-fundamentals.html#creating-standalone-reactive-values-as-refs

import { ref } from 'vue';

/*----------------------------------------------------------------------------------------------------
 * ref() 可以将一个原始数据类型的值包装成一个响应式的对象，
 *----------------------------------------------------------------------------------------------------*/

const state = ref(0);
console.log(state);

const timer01 = setInterval(() => {
  state.value++;
}, 1000);

export default {
  render() {
    return (
      <fieldset>
        <span style={{ marginRight: '12px' }}>{state.value}</span>
      </fieldset>
    );
  },
  unmounted() {
    clearInterval(timer01);
  },
};
