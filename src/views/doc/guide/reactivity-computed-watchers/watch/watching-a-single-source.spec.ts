import { reactive, ref, watch } from 'vue';

describe('src/views/doc/guide/reactivity-computed-watchers/watch/watching-a-single-source.jsx', () => {
  it('01', () => {
    const cb = jest.fn();
    const reactive01 = reactive({ prop01: 666 });
    /*----------------------------------------------------------------------------------------------------
     * getter 函数返回要监视的值，
     *----------------------------------------------------------------------------------------------------*/
    watch(() => reactive01.prop01, cb, {
      flush: 'sync',
    });

    reactive01.prop01 = 888;
    expect(cb).toBeCalledWith(888, 666, jasmine.anything());
  });

  it('02', () => {
    const cb = jest.fn();
    const ref01 = ref(666);
    /*----------------------------------------------------------------------------------------------------
     * 监视一个 ref 对象，
     *----------------------------------------------------------------------------------------------------*/
    watch(ref01, cb, { flush: 'sync' });

    ref01.value = 888;
    expect(cb).toBeCalledWith(888, 666, jasmine.anything());
  });
});
