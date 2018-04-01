<template>
  <div
    style="padding: 10px;"
  >
    <VIfOnTemplate></VIfOnTemplate>
    <VElse></VElse>
  </div>
</template>
<script>
import VIfOnTemplate from "./v-if-on-template";
import VElse from "./v-else";

export default {
  data() {
    return {};
  },
  components: {
    VIfOnTemplate,
    VElse
  }
};
</script>
<style scoped>
</style>
