<template>
  <fieldset>
    <legend>N</legend>

    <div>{{ inject01 }}</div>
  </fieldset>
</template>

<script lang="ts" setup>
  import { inject } from 'vue';

  const inject01 = inject('provide01', 0);
</script>

<style scoped></style>
