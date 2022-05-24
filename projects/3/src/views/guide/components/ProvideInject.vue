<template>
  <fieldset>
    <legend>inject</legend>

    <CompO></CompO>
  </fieldset>
</template>

<script lang="ts" setup>
  // http://localhost:8888/guide/components/provide-inject

  import { provide } from 'vue';
  import CompO from '@/components/CompO.vue';

  provide('provide01', 6);
</script>

<style lang="css" scoped></style>
