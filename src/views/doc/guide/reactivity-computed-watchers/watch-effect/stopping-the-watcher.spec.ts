import { ref, watchEffect } from 'vue';

describe('src/views/doc/guide/reactivity-computed-watchers/watch-effect/stopping-the-watcher.jsx', () => {
  /*----------------------------------------------------------------------------------------------------
   * watchEffect() 返回一个 function，调用该 function 可以终止监视，
   *----------------------------------------------------------------------------------------------------*/
  it('01', () => {
    const ref01 = ref(1);

    const actual: Array<number> = [];
    const stop = watchEffect(
      () => {
        actual.push(ref01.value);
      },
      {
        flush: 'sync',
      },
    );

    ref01.value = 2;
    ref01.value = 4;
    expect(actual).toEqual([1, 2, 4]);

    stop();

    ref01.value = 8;
    ref01.value = 16;
    expect(actual).toEqual([1, 2, 4]);
  });
});
