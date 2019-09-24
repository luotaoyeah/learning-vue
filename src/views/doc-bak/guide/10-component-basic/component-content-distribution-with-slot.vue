<template>
  <div>
    <h1>7. Content Distribution with Slots</h1>
    <small>
      <ul>
        <li>
          vue 提供了自定义元素 slot，用来将组件元素之间的内容， 传递到组件中；
        </li>
      </ul>
    </small>
    <MyComponent><i>content from parent using slot</i></MyComponent>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("MyComponent", {
  template: `
  <div>
  <p>component content</p>
  <p><slot></slot></p>
</div>
`,
});

export default {
  data() {
    return {};
  },
};
</script>
