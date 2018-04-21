<template>
  <div>
    <h2>event & key modifiers</h2>
    <ul>
      <li>
        vue 为下面三个事件修饰符提供了前缀：
        <ul>
          <li>.passive ：&</li>
          <li>.capture ：!</li>
          <li>.once ：~</li>
          <li>.capture.once ：~!</li>
          <li>.once.capture ：~!</li>
        </ul>
        <p>
          <MyComponent210404></MyComponent210404>
        </p>
      </li>
      <li>
        其他的事件修饰符都可以通过 JS 代码来实现；
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("MyComponent210404", {
  render(h) {
    return h(
      "el-button",
      {
        on: {
          "~click"(event) {
            alert("MyComponent210404.click()");
          }
        }
      },
      ["click me"]
    );
  }
});

export default {
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped>
</style>
