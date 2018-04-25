<template>
  <div>
    <ul>
      <li>类型：boolean</li>
      <li>默认：false</li>
      <li>
        描述：阻止 vue 在控制台打印日志和警告；
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  data() {
    return {};
  },
  created() {
    Vue.config.silent = true;
  },
  beforeDestroy() {
    Vue.config.silent = false;
  },
  components: {}
};
</script>
<style scoped>
</style>
