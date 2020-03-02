// https://v3.vuejs.org/guide/reactivity-fundamentals.html#access-in-reactive-objects

import { reactive, ref } from 'vue';

/*----------------------------------------------------------------------------------------------------
 * 当 ref 对象作为 reactive 对象的属性时，读写该属性会自动 unwrap，
 * 该属性可以被赋值一个新的 ref 对象，
 *----------------------------------------------------------------------------------------------------*/

const ref01 = ref(666);
const ref02 = ref(888);

const reactive01 = reactive({
  prop01: ref01,
});

export default {
  render() {
    return (
      <>
        <fieldset>
          <p>
            ref01：
            <span>{ref01.value}</span>
          </p>
          <p>
            ref02：
            <span>{ref02.value}</span>
          </p>
          <p>
            prop01：
            <span>{reactive01.prop01}</span>
          </p>

          <button
            style={{
              borderRadius: '3px',
              marginRight: '12px',
            }}
            onClick={() => {
              reactive01.prop01++;
            }}
          >
            increase
          </button>
          <button
            style={{
              borderRadius: '3px',
              marginRight: '12px',
            }}
            disabled={reactive01.prop01 === ref01.value}
            onClick={() => {
              reactive01.prop01 = ref01;
            }}
          >
            change to ref01
          </button>
          <button
            style={{
              borderRadius: '3px',
              marginRight: '12px',
            }}
            disabled={reactive01.prop01 === ref02.value}
            onClick={() => {
              reactive01.prop01 = ref02;
            }}
          >
            change to ref02
          </button>
        </fieldset>
      </>
    );
  },
};
