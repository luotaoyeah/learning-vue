<template>
  <div style="padding: 10px;">
    <todo-item></todo-item>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("todo-item", {
  template: "<span>This is a todo.</span>"
});
export default {
  name: "ComposingWithComponents",
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
