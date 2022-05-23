<template>
  <fieldset>
    <legend>H</legend>

    <button @click="$emit('tClick')">tClick</button>
    <button @click="$emit('t-move-01')">t-move</button>
    <button @click="emit('t-click-01')">t-click-01</button>
  </fieldset>
</template>

<script lang="ts" setup>
  const emit = defineEmits(['t-click-01']);
</script>

<style scoped></style>
