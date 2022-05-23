<template>
  <fieldset>
    <legend>H</legend>

    <button @click="$emit('tClick')">tClick</button>
    <button @click="$emit('t-move-01')">t-move</button>
    <button @click="emit('t-click-01')">t-click-01</button>
    <button @click="emit('t-click-02', 9)">t-click-02</button>
  </fieldset>
</template>

<script lang="ts" setup>
  const emit = defineEmits({
    't-click-01': null,
    't-click-02': (value) => {
      console.log('value', value);
      return true;
    },
  });
</script>

<style scoped></style>
