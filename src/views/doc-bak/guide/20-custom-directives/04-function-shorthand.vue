<template>
  <div>
    <ul>
      <li>
        如果期望在 bind 和 update 两个钩子函数中执行同样的逻辑， 并且不关心其他的钩子函数， 那么可以使用函数简写形式；
        <p><el-input v-model="message"></el-input></p>
        <p style="border: 2px solid #dddddd;border-radius: 3px;padding: 7px;" v-demo-directive-200401="message"></p>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";

Vue.directive("demo-directive-200401", (el, binding) => {
  el.innerHTML = String(binding.value).toUpperCase();
});

export default {
  data() {
    return { message: "" };
  },
  components: {},
};
</script>
