// https://v3.vuejs.org/guide/reactivity-fundamentals.html#ref-unwrapping

import { ref } from 'vue';

export default {
  setup() {
    /*----------------------------------------------------------------------------------------------------
     * setup() 返回的对象叫 render context，如果它的某个属性是一个 ref 对象，
     * 当这个 ref 对象在 template 中使用时，不用加 .value，它会自动进行 unwrap，
     *----------------------------------------------------------------------------------------------------*/
    const value01 = ref(0);
    return { value01 };
  },
  render() {
    return (
      <fieldset>
        <button
          style={{ borderRadius: '3px', marginRight: '12px' }}
          onClick={() => {
            this.value01++;
          }}
        >
          {this.value01}
        </button>
      </fieldset>
    );
  },
};
