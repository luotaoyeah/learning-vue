<template>
  <!------------------------------------------------------------------------------------------------------
      .exact 配合 .ctrl/.shift/.alt/.meta 使用，
      表示只有指定的 system modifier 按下才能触发，不能按下其他未指定的 system modifier，
  ------------------------------------------------------------------------------------------------------->

  <button :style="{ borderRadius: '3px', marginRight: '12px' }" @click.ctrl="onClick">@click.ctrl</button>
  <button :style="{ borderRadius: '3px' }" @click.ctrl.exact="onClick">@click.ctrl.exact</button>
</template>

<script>
// https://v3.vuejs.org/guide/events.html#exact-modifier

export default {
  methods: {
    onClick(event) {
      console.log(event);
    },
  },
};
</script>
