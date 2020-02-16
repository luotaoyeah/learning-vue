<template>
  <!------------------------------------------------------------------------------------------------------
      对于键盘事件，有一系列的 keyboard event modifier，比如：up/down/left/right/enter/space/delete/tab/esc，
      表示只监听某个按键的某个事件，
        比如 @keyup.enter  表示：只监听 enter 键的 keyup 事件，
        比如 @keydown.left 表示：只监听 left  键的 keydown 事件，

      此时，也有可能有其他的键触发了该事件，但是会被忽略，
        比如同时按下 A + ENTER 键，也会触发 @keydown.enter 事件，
  ------------------------------------------------------------------------------------------------------->
  <fieldset>
    <input :style="{ borderRadius: '3px' }" @keydown.enter="onKeydown4Enter($event)" />
  </fieldset>

  <!------------------------------------------------------------------------------------------------------
      除了 vue 内置的这些 keyboard event modifier 之外，我们还可以使用规范里面定义的所有的 key：
      https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
  ------------------------------------------------------------------------------------------------------->
  <fieldset>
    <!------------------------------------------------------------------------------------------------------
        如下，只有 A/E/I/O/U 才会触发该 keydown 事件，
    ------------------------------------------------------------------------------------------------------->
    <input :style="{ borderRadius: '3px' }" @keydown.prevent.a.e.i.o.u="onKeydown4Vowel($event)" />
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/events.html#key-modifiers

export default {
  methods: {
    onKeydown4Enter(event) {
      console.log(event.code);
    },
    onKeydown4Vowel(event) {
      console.log(event.code);
    },
  },
};
</script>
