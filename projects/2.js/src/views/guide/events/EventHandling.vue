<template>
  <div>
    <fieldset>
      <legend>System Modifier Keys</legend>

      <p>.exact 用来对 system modifier (.ctrl / .shift / .alt / .meta) 进行精确控制, 当且仅当指定的 system key 按下时才会触发事件.</p>

      <p>
        <button @click.ctrl="onClick01($event)">@click.ctrl</button>
        <button @click.ctrl.exact="onClick02($event)">@click.ctrl.exact</button>
      </p>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'EventHandling',
  methods: {
    onClick01() {
      alert('01');
    },
    onClick02() {
      alert('02');
    },
  },
};
</script>

<style scoped></style>
