<template>
  <fieldset>
    <legend>async-components</legend>

    <button @click="visible = !visible">toggle</button>

    <CompP v-if="visible"></CompP>
  </fieldset>
</template>

<script lang="ts" setup>
  // http://localhost:8888/guide/essentials/async

  import { defineAsyncComponent, ref } from 'vue';

  const visible = ref(false);
  const CompP = defineAsyncComponent(() => import('../../../components/CompP.vue'));
</script>

<style lang="css" scoped></style>
