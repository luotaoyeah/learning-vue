import { reactive, ref, watch } from 'vue';

describe('src/views/doc/guide/reactivity-computed-watchers/watch/watching-multiple-sources.jsx', () => {
  it('01', () => {
    const reactive01 = reactive({ prop01: 666 });
    const ref01 = ref(666);

    const cb = jest.fn();
    /*----------------------------------------------------------------------------------------------------
     * 同时监视多个状态，当任意一个状态发生变更时，都会触发回调函数，
     *----------------------------------------------------------------------------------------------------*/
    watch([ref01, () => reactive01.prop01], cb, {
      flush: 'sync',
    });

    reactive01.prop01 = 888;
    expect(cb).toBeCalledWith([666, 888], [666, 666], jasmine.anything());
  });
});
