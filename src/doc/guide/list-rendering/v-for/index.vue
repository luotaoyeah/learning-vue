<template>
  <div
    style="padding: 10px;"
  >
    <VFor></VFor>
    <VForWithObject></VForWithObject>
    <VForWithKey></VForWithKey>
  </div>
</template>
<script>
import VFor from "./v-for";
import VForWithObject from "./v-for-with-object";
import VForWithKey from "./v-for-key";

export default {
  data() {
    return {};
  },
  components: {
    VFor,
    VForWithObject,
    VForWithKey
  }
};
</script>
<style scoped>
</style>
