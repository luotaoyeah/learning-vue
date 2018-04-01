<template>
  <div
    style="padding: 10px;"
  >
    <VFor></VFor>
    <VForWithObject></VForWithObject>
    <VForWithKey></VForWithKey>
    <VForArrayChangeDetection></VForArrayChangeDetection>
    <VForCaveats></VForCaveats>
  </div>
</template>
<script>
import VFor from "./v-for";
import VForWithObject from "./v-for-with-object";
import VForWithKey from "./v-for-key";
import VForArrayChangeDetection from "./v-for-array-change-detection";
import VForCaveats from "./v-for-caveat";

export default {
  data() {
    return {};
  },
  components: {
    VFor,
    VForWithObject,
    VForWithKey,
    VForArrayChangeDetection,
    VForCaveats
  }
};
</script>
<style scoped>
</style>
