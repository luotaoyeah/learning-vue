<template>
  <div>
    <h1>3. Shorthands（简写）</h1>
    <p>
      <small>
        <i>
          v- 前缀可以很好的标识出模板中专属于 vue 的属性，但是在单页面应用中，所有的模板都是有 vue 来管理的， 所以 vue
          给最常用的两个指令 v-bind 和 v-on 提供了简写的方式；
        </i>
      </small>
    </p>
    <h2>3.1. v-bind 的简写形式</h2>
    <p>
      <small> <i> 将（v-bind:）简写为（:）； </i> </small>
    </p>
    <a :href="'http://www.github.com'">www.github.com</a>
    <h2>3.2. v-on 的简写形式</h2>
    <p>
      <small> <i> 将（v-on:）简写为（@）； </i> </small>
    </p>
    <p><button @click="handleClick">Click Me</button></p>
    <p>
      <small>
        <i>
          （:）和（@）都是可以用作 HTML 属性名称的合法字符，且都可以被 vue 支持的浏览器正确解析；
        </i>
      </small>
    </p>
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
    },
  },
};
</script>
