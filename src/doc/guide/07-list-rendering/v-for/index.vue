<template>
  <div>
    <VFor></VFor>
    <VForWithObject></VForWithObject>
    <VForWithKey></VForWithKey>
    <VForArrayChangeDetection></VForArrayChangeDetection>
    <VForCaveats></VForCaveats>
    <VForObjectChangeDetectionCaveats></VForObjectChangeDetectionCaveats>
    <VForDisplayFilteredOrSortedResults></VForDisplayFilteredOrSortedResults>
    <VForWithARange></VForWithARange>
    <VForOnATemplate></VForOnATemplate>
    <VForWithVIf></VForWithVIf>
    <VForWithAComponent></VForWithAComponent>
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
import VForOnATemplate from "./v-for-on-a-template";
import VForWithVIf from "./v-for-with-v-if";
import VForWithAComponent from "./v-for-with-a-component";

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
    VForWithARange,
    VForOnATemplate,
    VForWithVIf,
    VForWithAComponent
  }
};
</script>
<style scoped>
</style>
