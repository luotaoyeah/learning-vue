import { ref, watchEffect } from 'vue';

/*----------------------------------------------------------------------------------------------------
 * watchEffect() 依赖某些状态，每当状态变更时，就会执行定义好的逻辑，
 *----------------------------------------------------------------------------------------------------*/
describe('src/views/doc/guide/reactivity-computed-watchers/watch-effect/watch-effect.jsx', () => {
  it('01', () => {
    const ref01 = ref(1);

    const actual01: Array<number> = [];

    watchEffect(
      () => {
        actual01.push(ref01.value);
      },
      {
        flush: 'sync',
      },
    );

    ref01.value = 2;
    ref01.value = 4;
    expect(actual01).toEqual([1, 2, 4]);
  });
});
