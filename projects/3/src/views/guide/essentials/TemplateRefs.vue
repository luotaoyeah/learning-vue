<template>
  <fieldset>
    <legend>template-refs</legend>

    <div ref="div01">A</div>
  </fieldset>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';

  // http://localhost:8888/guide/essentials/template-refs

  const div01 = ref<HTMLDivElement | null>(null);

  watch(div01, (newValue, oldValue) => {
    console.log(`div01:`, newValue);
  });
</script>

<style lang="css" scoped></style>
