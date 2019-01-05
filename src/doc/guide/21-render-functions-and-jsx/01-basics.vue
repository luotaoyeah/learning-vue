<template>
  <div>
    <ul>
      <li>
        多数情况下推荐直接使用模板， 但是有时候渲染方法更加有用；
        <MyComponent210101 :level="2">h2</MyComponent210101>
        <MyComponent210101 :level="3">h3</MyComponent210101>
        <MyComponent210101 :level="4">h4</MyComponent210101>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("MyComponent210101", {
  render(h) {
    return h(`h${this.level}`, {}, [this.$slots.default]);
  },
  props: {
    level: {
      type: Number,
      required: true,
      default: 1
    }
  }
});

export default {
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped></style>
