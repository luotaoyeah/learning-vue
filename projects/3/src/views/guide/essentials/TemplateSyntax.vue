<template>
  <fieldset>
    <legend>text-interpolation</legend>

    <div>{{ msg }}</div>
  </fieldset>

  <fieldset>
    <legend>raw-html</legend>

    <div>{{ rawHtml }}</div>
    <div v-html="rawHtml"></div>
  </fieldset>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// http://localhost:8888/guide/essentials/template-syntax

const msg = ref('HELLO WORLD');

const rawHtml = ref<string>("<span style='color:red;'>红色</span>");
</script>

<style scoped></style>
