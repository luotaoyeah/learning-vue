import { ref, watchEffect } from 'vue';

describe('src/views/doc/guide/reactivity-computed-watchers/watch-effect/side-effect-invalidation.jsx', () => {
  /*----------------------------------------------------------------------------------------------------
   * 当监视终止时，或者依赖的状态发生变更时，称之为监视失效（invalidation），
   * 此时，副作用中可能有异步操作尚在执行，我们需要对它进行清理，
   * 可以使用参数 onInvalidate() 注册一个回调函数，当监视失效时它会被调用，
   *----------------------------------------------------------------------------------------------------*/
  it('01', () => {
    const cb = jest.fn();

    const ref01 = ref(1);

    const values: Array<number> = [];
    const stop = watchEffect(
      (onInvalidate) => {
        onInvalidate(cb);

        values.push(ref01.value);
      },
      {
        flush: 'sync',
      },
    );

    ref01.value = 2; // invalidate
    ref01.value = 4; // invalidate
    stop(); // invalidate

    expect(cb).toHaveBeenCalledTimes(3);
  });
});
