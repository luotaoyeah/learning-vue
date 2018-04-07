<template>
  <div>
    <h1>1. Base Example</h1>
    <small>
      <ul>
        <li>组件就是可以重用的 vue 实例；</li>
        <li>组件都有 name；</li>
        <li>使用时，把组件当做一个自定义的 DOM 元素来使用；</li>
      </ul>
    </small>
    <ButtonCounter></ButtonCounter>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("ButtonCounter", {
  template:
    '<button v-on:click="count++">You clicked {{count}} times.</button>',
  data() {
    return {
      count: 0
    };
  }
});

export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
