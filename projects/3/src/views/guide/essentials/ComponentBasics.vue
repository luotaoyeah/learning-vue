<template>
  <fieldset>
    <legend>passing-props</legend>

    <CompD :t-title="'FOO'"></CompD>
    <CompD :t-title="'BAR'"></CompD>
  </fieldset>
</template>

<script lang="ts" setup>
  // http://localhost:8888/guide/essentials/component-basics
  import CompD from '@/components/CompD.vue';
</script>

<style lang="css" scoped></style>
