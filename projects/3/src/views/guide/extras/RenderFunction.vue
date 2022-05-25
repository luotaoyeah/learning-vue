<template>
  <fieldset>
    <legend>render-functions</legend>

    <CompA></CompA>
  </fieldset>
</template>

<script lang="ts" setup>
  // http://localhost:8888/guide/extras/render-function

  import { defineComponent, h } from 'vue';

  const CompA = defineComponent({
    setup() {
      return () => h('div', { class: 'foo', style: { color: 'red' } }, ['HELLO']);
    },
  });
</script>

<style lang="css" scoped></style>
