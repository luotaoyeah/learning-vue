<template>
  <el-tabs tab-position="left" style="height: 100%;">
    <el-tab-pane label="v-if / v-else without key"> <C01></C01> </el-tab-pane>
    <el-tab-pane label="Element selector with scoped">
      <C02></C02>
    </el-tab-pane>
    <el-tab-pane label="Implicit parent-child communication">
      <C03></C03>
    </el-tab-pane>
    <el-tab-pane label="Non-flux state management"> <C04></C04> </el-tab-pane>
  </el-tabs>
</template>
<script>
import C01 from "./01-vif-without-key";
import C02 from "./02-element-selector-with-scoped";
import C03 from "./03-implicit-parent-child-communication";
import C04 from "./04-non-flux-state-management";

export default {
  data() {
    return {};
  },
  components: {
    C01,
    C02,
    C03,
    C04
  }
};
</script>
<style scoped></style>
