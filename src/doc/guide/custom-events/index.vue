<template>
  <div
    style="padding: 10px;"
  >
    <PropsCasing></PropsCasing>
    <PropsStaticAndDynamicProps></PropsStaticAndDynamicProps>
    <PropsOneWayDataFlow></PropsOneWayDataFlow>
    <PropsPropValidation></PropsPropValidation>
  </div>
</template>
<script>
import PropsCasing from "./custom-events-event-names";
import PropsStaticAndDynamicProps from "./custom-event-customizing-component-v-model";
import PropsOneWayDataFlow from "./custom-event-binding-native-event-to-component";
import PropsPropValidation from "./custom-event-sync-modifier";

export default {
  data() {
    return {};
  },
  components: {
    PropsCasing,
    PropsStaticAndDynamicProps,
    PropsOneWayDataFlow,
    PropsPropValidation
  }
};
</script>
<style scoped>
</style>
