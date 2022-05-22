<template>
  <fieldset>
    <legend>D</legend>

    <div>{{ tTitle }}</div>

    <button @click="emitClick">EMIT</button>
  </fieldset>
</template>

<script lang="ts" setup>
  import { watch, watchEffect } from 'vue';

  const props = defineProps(['tTitle']);
  const emit = defineEmits(['t-click']);

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

  function emitClick() {
    emit('t-click');
  }
</script>

<style scoped></style>
