<template>
  <div
    style="padding: 10px;"
  >
    <PropsCasing></PropsCasing>
    <PropsStaticAndDynamicProps></PropsStaticAndDynamicProps>
    <PropsOneWayDataFlow></PropsOneWayDataFlow>
    <PropsPropValidation></PropsPropValidation>
    <PropsNoPropAttribute></PropsNoPropAttribute>
  </div>
</template>
<script>
import PropsCasing from "./props-casing";
import PropsStaticAndDynamicProps from "./props-static-and-dynamic-props";
import PropsOneWayDataFlow from "./props-one-way-data-flow";
import PropsPropValidation from "./props-prop-validation";
import PropsNoPropAttribute from "./props-non-prop-attribute";

export default {
  data() {
    return {};
  },
  components: {
    PropsCasing,
    PropsStaticAndDynamicProps,
    PropsOneWayDataFlow,
    PropsPropValidation,
    PropsNoPropAttribute
  }
};
</script>
<style scoped>
</style>
