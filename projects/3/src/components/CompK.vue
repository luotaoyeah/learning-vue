<template>
  <fieldset>
    <legend>K</legend>

    {{ foo }}
    <button @click="emit('click')">CLICK</button>
  </fieldset>
</template>

<script lang="ts" setup>
  defineProps(['foo']);
  const emit = defineEmits(['click']);
</script>

<style scoped></style>
