import { computed, reactive, ref } from 'vue';

describe('src/views/doc/guide/reactivity-computed-watchers/computed-values.jsx', () => {
  /*----------------------------------------------------------------------------------------------------
   * 用 computed() 手动创建一个 computed 对象，它依赖于其他的 reactive/ref 对象，
   * computed() 返回的是一个特殊的 ref 对象，
   *----------------------------------------------------------------------------------------------------*/
  it('01', () => {
    const ref01 = ref(0);
    const computed01 = computed(() => ref01.value + 1);

    ref01.value = 1;
    expect(computed01.value).toBe(2);

    ref01.value = 2;
    expect(computed01.value).toBe(3);
  });

  it('02', () => {
    const reactive01 = reactive({ prop01: 0 });
    const computed01 = computed({
      get: () => {
        return reactive01.prop01 + 1;
      },
      set: (value) => {
        reactive01.prop01 = value - 1;
      },
    });

    reactive01.prop01 = 2;
    expect(computed01.value).toBe(3);

    computed01.value = 4;
    expect(reactive01.prop01).toBe(3);
  });
});
