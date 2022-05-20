<template>
  <fieldset>
    <legend>basic-example</legend>

    <div>reactive01: {{ reactive01.x }}</div>
    <div>computed01: {{ computed01 }}</div>
    <div>computed02: {{ computed02 }}</div>

    <button @click="reactive01.x++">++</button>
  </fieldset>
</template>

<script lang="ts" setup>
  import { computed, ComputedRef, reactive } from 'vue';

  // http://localhost:8888/guide/essentials/computed

  const reactive01 = reactive({ x: 1 });
  const computed01: ComputedRef<number> = computed(() => {
    return reactive01.x + 1;
  });
  const computed02 = computed({
    get: (args) => {
      return computed01.value + 1;
    },
    set: (v) => {},
  });
</script>

<style lang="less" scoped></style>
