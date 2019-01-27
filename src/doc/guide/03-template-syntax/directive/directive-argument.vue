<template>
  <div>
    <h1>1. Arguments（参数）</h1>
    <p>
      <small> <i> 指令可以通过在指令后面加冒号（:）来指定参数； </i> </small>
    </p>
    <h2>1.1. v-bind</h2>
    <p>
      <small> <i> v-bind 冒号后面的参数，表示要绑定的属性名称； </i> </small>
    </p>
    <p><a v-bind:href="'http://www.github.com'">www.github.com</a></p>
    <h2>1.2. v-on</h2>
    <p>
      <small> <i> v-on 冒号后面的参数，表示要绑定的 DOM 事件名称； </i> </small>
    </p>
    <p><button v-on:click="handleClick">Click Me</button></p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleClick() {
      alert("You clicked me.");
    }
  }
};
</script>
