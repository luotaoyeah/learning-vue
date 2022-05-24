<template>
  <fieldset>
    <legend>O</legend>

    <CompN></CompN>
  </fieldset>
</template>

<script lang="ts" setup>
  import { provide } from 'vue';
  import CompN from '@/components/CompN.vue';

  provide('provide01', 9);
</script>

<style scoped></style>
