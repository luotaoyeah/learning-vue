<template>
  <fieldset>
    <legend>passing-props</legend>

    <CompD :t-title="'FOO'"></CompD>
    <CompD :t-title="'BAR'"></CompD>
  </fieldset>

  <fieldset>
    <legend>listening-to-events</legend>

    <CompD @t-click="fn01"></CompD>
  </fieldset>
</template>

<script lang="ts" setup>
  // http://localhost:8888/guide/essentials/component-basics
  import CompD from '@/components/CompD.vue';

  function fn01() {
    console.log('t-click');
  }
</script>

<style lang="css" scoped></style>
