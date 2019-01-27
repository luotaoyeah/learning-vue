<template>
  <div>
    <h1>1. Prop Casing</h1>
    <small>
      <ul>
        <li>
          HTML 是大小写敏感的，浏览器会将所有的大写字母当成小写字母来解析；
        </li>
        <li>直接在 DOM 里面使用 props 的时候，必须使用 kebab-case；</li>
        <li>在字符创模板里面不受此限制；</li>
      </ul>
    </small>
    <MyComponent :post-title="title"></MyComponent>
    <MyComponent :postTitle="title"></MyComponent>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("MyComponent", {
  template: "<p>{{postTitle}}</p>",
  props: ["postTitle"]
});

export default {
  data() {
    return {
      title: "This is a title."
    };
  }
};
</script>
