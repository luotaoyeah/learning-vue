<template>
  <fieldset>
    <legend>C</legend>
  </fieldset>
</template>

<script setup lang="ts">
  import { Ref, ref } from 'vue';

  const x = ref(6);
  const y = ref(9);

  // 当子组件是 <script setup>, 当父组件通过 template ref 访问子组件时, 只能访问子组件通过 defineExpose() 暴露的数据
  defineExpose<{ x: Ref<number>; y: Ref<number> }>({ x, y });
</script>

<style scoped></style>
