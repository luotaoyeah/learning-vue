import { DebuggerEvent } from '@vue/reactivity';
import { Ref, ref, watchEffect } from 'vue';

describe('src/views/doc/guide/reactivity-computed-watchers/watch-effect/watcher-debugging.jsx', () => {
  it('01', () => {
    const ref01 = ref(1);
    const ref02 = ref(2);

    watchEffect(
      () => {
        expect(ref01.value).toBeTruthy();
        expect(ref02.value).toBeTruthy();
      },
      {
        flush: 'sync',
        /*----------------------------------------------------------------------------------------------------
         * 当依赖的状态被 get 时触发 onTrack()，
         *----------------------------------------------------------------------------------------------------*/
        onTrack(event: DebuggerEvent) {
          console.log('onTrack', (event.target as Ref).value);
        },
        /*----------------------------------------------------------------------------------------------------
         * 当依赖的状态被 set 时触发 onTrigger()，
         *----------------------------------------------------------------------------------------------------*/
        onTrigger(event: DebuggerEvent) {
          console.log('onTrigger', (event.target as Ref).value);
        },
      },
    );

    ref01.value = 3;
    ref02.value = 4;
  });
});
