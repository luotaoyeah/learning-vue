<template>
  <!------------------------------------------------------------------------------------------------------
      系统控制按键（system modifier） .ctrl/.shift/.alt/.meta 表示，只有当这些键处于按下状态时，才会触发对应的事件，
      比如 @keyup.enter.ctrl  表示：按住 CTRL 并抬起 ENTER 才会触发事件，
      比如 @click.alt 表示：按住 ALT 并鼠标左键点击才会触发事件，

      system modifier 可以用于 keyboard event 或者 mouse event，
      .meta 在 windows 系统中表示 windows 键，
  ------------------------------------------------------------------------------------------------------->
  <fieldset>
    <button :style="{ borderRadius: '3px' }" @click.alt="onClick">@click.alt</button>
  </fieldset>

  <fieldset>
    <legend>.exact MODIFIER</legend>
    <exact-modifier></exact-modifier>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/events.html#system-modifier-keys

import exactModifier from './exact-modifier.vue';

export default {
  methods: {
    onClick(event) {
      console.assert(event.altKey);
    },
  },
  components: {
    'exact-modifier': exactModifier,
  },
};
</script>
