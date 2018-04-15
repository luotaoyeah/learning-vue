<template>
  <div>
    <EdgeCaseElementComponentAccess></EdgeCaseElementComponentAccess>
    <EdgeCaseProgrammaticEventListener></EdgeCaseProgrammaticEventListener>
    <EdgeCaseCircularReference></EdgeCaseCircularReference>
    <EdgeCaseAlternativeTemplate></EdgeCaseAlternativeTemplate>
    <EdgeCaseControlUpdate></EdgeCaseControlUpdate>
  </div>
</template>
<script>
import EdgeCaseElementComponentAccess from "./edge-case-element-component-access";
import EdgeCaseProgrammaticEventListener from "./edge-case-programmatic-event-listener";
import EdgeCaseCircularReference from "./edge-case-circular-reference";
import EdgeCaseAlternativeTemplate from "./edge-case-alternative-template-definition";
import EdgeCaseControlUpdate from "./edge-case-control-update";

export default {
  data() {
    return {};
  },
  components: {
    EdgeCaseElementComponentAccess,
    EdgeCaseProgrammaticEventListener,
    EdgeCaseCircularReference,
    EdgeCaseAlternativeTemplate,
    EdgeCaseControlUpdate
  }
};
</script>
<style scoped>
</style>
