<template>
  <fieldset>
    <legend>deep-reactivity</legend>

    <div>{{ state.count }}</div>
    <button v-on:click="increment">++</button>

    <div>{{ state.arr }}</div>

    <button v-on:click="pushToArr">push</button>
  </fieldset>

  <fieldset>
    <legend>reactive-proxy-vs-original-1</legend>
  </fieldset>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue';

// http://localhost:8888/guide/essentials/reactivity-fundamentals

const state = reactive({ count: 0, arr: [1, 2, 3] });

function increment() {
  state.count++;
}

function pushToArr() {
  state.arr.push(state.arr.length + 1);
}

const obj01 = { x: 1 };

// 对同一个对象 obj01 多次调用 reactive(), 返回的是同一个 proxy 对象
console.assert(reactive(obj01) === reactive(obj01));

// 对 proxy 调用 reactive(), 返回的依然是 proxy
console.assert(reactive(obj01) === reactive(reactive(obj01)));
console.assert(reactive(obj01) === reactive(reactive(reactive(reactive(obj01)))));

watch(
  () => state.count,
  (newValue, oldValue) => {
    console.log(oldValue, newValue);
  },
);

// 把 proxy 的属性赋值给普通变量, 这个普通变量不是响应式的
const count01 = state.count;
watch(
  () => count01,
  (newValue, oldValue) => {
    console.log(`count01:${oldValue},${newValue}`);
  },
);
</script>

<style lang="less" scoped></style>
