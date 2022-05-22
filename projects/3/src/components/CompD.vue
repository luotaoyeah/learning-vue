<template>
  <fieldset>
    <legend>D</legend>

    <div>{{ tTitle }}</div>
  </fieldset>
</template>

<script setup lang="ts">
  import { watch, watchEffect } from 'vue';

  const props = defineProps(['tTitle']);

  watch(
    () => props.tTitle,
    (value) => {
      console.log(`tTitle: ${value}`);
    },
    { immediate: true },
  );

  watchEffect(() => {
    console.log(`watchEffect.tTitle: ${props.tTitle}`);
  });
</script>

<style scoped></style>
