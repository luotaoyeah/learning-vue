<template>
  <fieldset>
    <legend></legend>

    <div>{{ state.count }}</div>
    <button v-on:click="increment">++</button>

    <div>{{ state.arr }}</div>

    <button v-on:click="pushToArr">push</button>
  </fieldset>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

// http://localhost:8888/guide/essentials/reactivity-fundamentals

const state = reactive({ count: 0, arr: [1, 2, 3] });

function increment() {
  state.count++;
}

function pushToArr() {
  state.arr.push(state.arr.length + 1);
}
</script>

<style lang="less" scoped></style>
