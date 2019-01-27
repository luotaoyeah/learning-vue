<template>
  <div>
    <h1>4. Compilation Scope</h1>
    <small>
      <ul>
        <li>组件元素之间的内容会被替换到组件的 slot 元素位置；</li>
        <li>
          从模板的层面来讲，组件元素之间的内容处于父组件的模板之中，
          只能访问父组件的数据，而不能访问组件本身的数据；
        </li>
        <li>
          父组件模板中的内容会被编译到父组件的作用域；
          子组件模板中的内容会被编译到子组件的作用域；
        </li>
      </ul>
    </small>
    <MyComponent>
      <p>parent, name = {{ name }}, age = {{ age }}</p>
    </MyComponent>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("MyComponent", {
  template: `
<div>
  <p>child, age = {{age}}</p>
  <slot></slot>
</div>`,
  data() {
    return {
      age: 18
    };
  }
});

export default Vue.extend({
  data() {
    return {
      name: "tom"
    };
  }
});
</script>
<style scoped></style>
