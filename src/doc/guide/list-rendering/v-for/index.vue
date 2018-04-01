<template>
  <div
    style="padding: 10px;"
  >
    <VFor></VFor>
    <VForWithObject></VForWithObject>
    <VForWithKey></VForWithKey>
    <VForArrayChangeDetection></VForArrayChangeDetection>
  </div>
</template>
<script>
import VFor from "./v-for";
import VForWithObject from "./v-for-with-object";
import VForWithKey from "./v-for-key";
import VForArrayChangeDetection from "./v-for-array-change-detection";

export default {
  data() {
    return {};
  },
  components: {
    VFor,
    VForWithObject,
    VForWithKey,
    VForArrayChangeDetection
  }
};
</script>
<style scoped>
</style>
