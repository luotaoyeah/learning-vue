<template>
  <div
    style="padding: 10px;"
  >
    <VFor></VFor>
    <VForWithObject></VForWithObject>
  </div>
</template>
<script>
import VFor from "./v-for";
import VForWithObject from "./v-for-with-object";

export default {
  data() {
    return {};
  },
  components: {
    VFor,
    VForWithObject
  }
};
</script>
<style scoped>
</style>
