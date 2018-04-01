<template>
  <div
    style="padding: 10px;"
  >
    <VFor></VFor>
    <VForWithObject></VForWithObject>
    <VForWithKey></VForWithKey>
    <VForArrayChangeDetection></VForArrayChangeDetection>
    <VForCaveats></VForCaveats>
    <VForObjectChangeDetectionCaveats></VForObjectChangeDetectionCaveats>
  </div>
</template>
<script>
import VFor from "./v-for";
import VForWithObject from "./v-for-with-object";
import VForWithKey from "./v-for-key";
import VForArrayChangeDetection from "./v-for-array-change-detection";
import VForCaveats from "./v-for-caveat";
import VForObjectChangeDetectionCaveats from "./v-for-object-change-detection-caveat";

export default {
  data() {
    return {};
  },
  components: {
    VFor,
    VForWithObject,
    VForWithKey,
    VForArrayChangeDetection,
    VForCaveats,
    VForObjectChangeDetectionCaveats
  }
};
</script>
<style scoped>
</style>
