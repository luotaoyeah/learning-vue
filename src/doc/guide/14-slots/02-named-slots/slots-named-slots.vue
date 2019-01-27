<template>
  <div>
    <h1>2. Named Slots</h1>
    <small>
      <ul>
        <li>有时候需要使用多个 slot，可以通过 '命名的 slot' 来实现；</li>
        <li>在组件模板中声明多个 slot，通过 name 属性来区分不同的 slot；</li>
        <li>
          在组件元素之间，通过 slot 属性来指定要使用的 slot， slot
          属性的值就是在模板中定义的 slot 元素的 name 属性；
        </li>
        <li>
          slot 属性可以用在 template 元素上， 也可以直接用在普通的元素上；
        </li>
        <li>
          组件模板中可以声明一个（且最多只能声明一个）默认的 slot， 即没有声明
          name 属性的 slot； 在组件元素之间没有 slot 属性的内容，
          都会被替换到这个默认的 slot 的位置；
        </li>
      </ul>
    </small>
    <MyComponent01>
      content01
      <!--用在 template 元素上-->
      <template slot="header"
        ><p>header</p></template
      >
      content02
      <!--用在普通元素上-->
      <p slot="footer">footer</p>
      content03
    </MyComponent01>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("MyComponent01", {
  template: `
<div>
  <header><slot name="header"></slot></header>
  <content><slot></slot></content>
  <footer><slot name="footer"></slot></footer>
</div>
  `
});

export default Vue.extend({
  data() {
    return {};
  }
});
</script>
<style scoped></style>
