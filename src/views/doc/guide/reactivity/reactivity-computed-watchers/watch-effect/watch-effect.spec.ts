import { ref, watchEffect } from 'vue';

describe('src/views/doc/guide/reactivity-computed-watchers/watch-effect/watch-effect.jsx', () => {
  /*----------------------------------------------------------------------------------------------------
   * watchEffect() 监视/依赖某些状态，每当状态发生变更时，就会执行定义好的逻辑，
   *----------------------------------------------------------------------------------------------------*/
  it('01', () => {
    const ref01 = ref(1);

    const values: Array<number> = [];

    watchEffect(
      () => {
        values.push(ref01.value);
      },
      {
        flush: 'sync',
      },
    );

    ref01.value = 2;
    ref01.value = 4;
    expect(values).toEqual([1, 2, 4]);
  });
});
