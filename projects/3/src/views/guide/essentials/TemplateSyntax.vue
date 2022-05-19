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

  <fieldset>
    <legend>attribute-bindings</legend>

    <div v-bind:data-foo="msg">1</div>
    <div :data-foo="msg" :data-bar="null" :data-baz="undefined">2</div>

    <button :disabled="''">button</button>

    <div v-bind="attrs01" :data-baz="3">3</div>
  </fieldset>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// http://localhost:8888/guide/essentials/template-syntax

const msg = ref('HELLO WORLD');

const rawHtml = ref<string>("<span style='color:red;'>红色</span>");

const attrs01 = ref({
  'data-foo': 1,
  'data-bar': 2,
});
</script>

<style scoped></style>
