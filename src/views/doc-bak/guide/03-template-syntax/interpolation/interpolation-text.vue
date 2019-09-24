<template>
  <div>
    <h1>1. Text</h1>
    <!--
        使用双花括号的语法，花括号里面是 data 对象的属性；
    -->
    <p>Message: {{ msg }}</p>
    <!--
        使用 v-once 指令，只在第一次解析的时候绑定变量的值；后面更新变量值的时候，模板上绑定的值不会再变化；
    -->
    <h2>1.1. v-once</h2>
    <p v-once>Messasge: {{ msg }}</p>
    <h2>1.2. interpret the data as plain text</h2>
    <p>Message：{{ htmlStr }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello world",
      htmlStr: "<b>html string</b>",
    };
  },
};
</script>
