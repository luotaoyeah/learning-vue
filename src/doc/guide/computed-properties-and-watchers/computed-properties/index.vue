<template>
  <div
    style="padding: 10px;"
  >
    <h1>1. Computed Properties</h1>
    <p>
      <small>
        <i>
          模板内的表达式一般只用来进行简单的操作；当逻辑太复杂的时候就需要使用 computed properties；
        </i>
      </small>
    </p>
    <ComputedPropertiesBasic></ComputedPropertiesBasic>
    <ComputedPropertiesVsMethod></ComputedPropertiesVsMethod>
    <ComputedPropertiesVsWatchedProperty></ComputedPropertiesVsWatchedProperty>
  </div>
</template>
<script>
import ComputedPropertiesBasic from "./computed-properties-basic";
import ComputedPropertiesVsMethod from "./computed-properties-vs-method";
import ComputedPropertiesVsWatchedProperty from "./computed-properties-vs-watched-property";

export default {
  components: {
    ComputedPropertiesBasic,
    ComputedPropertiesVsMethod,
    ComputedPropertiesVsWatchedProperty
  }
};
</script>
<style scoped>
</style>
