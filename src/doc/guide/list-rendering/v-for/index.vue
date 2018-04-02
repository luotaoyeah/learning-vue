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
    <VForDisplayFilteredOrSortedResults></VForDisplayFilteredOrSortedResults>
    <VForWithARange></VForWithARange>
  </div>
</template>
<script>
import VFor from "./v-for";
import VForWithObject from "./v-for-with-object";
import VForWithKey from "./v-for-key";
import VForArrayChangeDetection from "./v-for-array-change-detection";
import VForCaveats from "./v-for-caveat";
import VForObjectChangeDetectionCaveats from "./v-for-object-change-detection-caveat";
import VForDisplayFilteredOrSortedResults from "./v-for-display-filtered-or-sorted-results";
import VForWithARange from "./v-for-with-a-range";

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
    VForObjectChangeDetectionCaveats,
    VForDisplayFilteredOrSortedResults,
    VForWithARange
  }
};
</script>
<style scoped>
</style>
