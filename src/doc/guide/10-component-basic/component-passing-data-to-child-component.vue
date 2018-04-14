<template>
  <div>
    <h1>4. Passinig Data to Child Components with Props</h1>
    <small>
      <ul>
        <li>我们可以通过 props 从父组件向子组件传递数据；</li>
        <li>props 是注册在组件上的自定义属性，可以从父组件接收数据；</li>
        <li>在组件中，我们可以像访问 data 属性一样访问 props 属性；</li>
      </ul>
    </small>
    <post :title="title01"></post>
    <post :title="title02"></post>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("post", {
  template: "<p>{{title}}</p>",
  props: ["title"]
});

export default {
  data() {
    return {
      title01: "HELLO WORLD",
      title02: "FOO BAR"
    };
  }
};
</script>
<style scoped>
</style>
