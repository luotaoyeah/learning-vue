import { reactive, readonly } from 'vue';

describe('src/views/doc/guide/reactivity-fundamentals/prevent-mutating-reactive-objects-with-readonly.jsx', () => {
  /*----------------------------------------------------------------------------------------------------
   * readonly() 将 reactive 对象变成只读的，
   *----------------------------------------------------------------------------------------------------*/
  it('01', () => {
    const reactive01 = readonly(
      reactive({
        prop01: 666,
      }),
    );

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore TS2540
    reactive01.prop01 = 888;

    expect(reactive01.prop01).toBe(666);
  });
});
