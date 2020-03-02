// https://v3.vuejs.org/guide/reactivity-fundamentals.html#declaring-reactive-state

import { reactive } from 'vue';

/*----------------------------------------------------------------------------------------------------
 * 使用 reactive() 方法手动创建一个响应式的数据，类似于 data() 返回的数据，
 *----------------------------------------------------------------------------------------------------*/
const state = reactive({ value01: 666 });

const timer01 = setInterval(() => {
  state.value01++;
}, 1000);

export default {
  data() {
    return { value02: 666, timer02: null };
  },
  mounted() {
    this.timer02 = setInterval(() => {
      this.value02++;
    }, 1000);
  },
  render() {
    return (
      <fieldset>
        <span style={{ marginRight: '12px' }}>{state.value01}</span>
        <span style={{ marginRight: '12px' }}>{this.value02}</span>
      </fieldset>
    );
  },
  unmounted() {
    clearInterval(timer01);
    if (this.timer02) {
      clearInterval(this.timer02);
    }
  },
};
