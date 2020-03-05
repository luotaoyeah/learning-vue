// https://v3.vuejs.org/guide/reactivity-fundamentals.html#destructuring-reactive-state

import { reactive, toRef, toRefs } from 'vue';

const reactive01 = reactive({
  prop01: 666,
  prop02: 666,
  prop03: 666,
});

/*----------------------------------------------------------------------------------------------------
 * 直接解构一个 reactive 对象得到的属性，不再是 reactive 的，
 *----------------------------------------------------------------------------------------------------*/
const { prop01 } = reactive01;
/*----------------------------------------------------------------------------------------------------
 * 可以用 toRefs() 将 reactive 对象的所有属性都转换为 ref 对象，且每一个 ref 对象都跟原来的属性是同步的，
 *----------------------------------------------------------------------------------------------------*/
const { prop02 } = toRefs(reactive01);
/*----------------------------------------------------------------------------------------------------
 * 可以用 toRef() 将 reactive 对象的某个属性转换为 ref 对象，该 ref 对象跟原来的属性是同步的，
 *----------------------------------------------------------------------------------------------------*/
const prop03 = toRef(reactive01, 'prop03');

const timer01 = setInterval(() => {
  reactive01.prop01++;
  reactive01.prop02++;
  reactive01.prop03++;
}, 1000);

export default {
  render() {
    return (
      <>
        <fieldset>
          <p>{prop01}</p>
          <p>{prop02.value}</p>
          <p>{prop03.value}</p>
        </fieldset>
      </>
    );
  },
  unmounted() {
    clearInterval(timer01);
  },
};
