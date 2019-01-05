<template>
  <div>
    <h1>3. Default Slot Content</h1>
    <small>
      <ul>
        <li>
          可以在 slot 元素之间声明默认内容， 当组件元素之间没有内容时，
          就会显示默认内容，否则使用组件元素之间的内容；
        </li>
      </ul>
    </small>
    <MyComponent01></MyComponent01>
    <MyComponent01>custom content</MyComponent01>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("MyComponent01", {
  template: `
<div>
  <p>header</p>
  <slot>default content</slot>
  <p>footer</p>
</div>
  `
});

export default {
  data() {
    return {};
  }
};
</script>
<style scoped></style>
