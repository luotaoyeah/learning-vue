<template>
  <div>
    <ul>
      <li>
        描述：当前 vue 的版本；
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
    console.log("Vue.version:", Vue.version);
  },
  components: {}
};
</script>
<style scoped>
</style>
