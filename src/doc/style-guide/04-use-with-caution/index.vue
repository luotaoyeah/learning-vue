<template>
  <el-tabs
    tab-position="left"
    style="height: 100%;"
  >
    <el-tab-pane label="v-if / v-else with key">
      <C01></C01>
    </el-tab-pane>
    <el-tab-pane label="Element selector with scoped">
      <C02></C02>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import C01 from "./01-vif-with-key";
import C02 from "./02-element-selector-with-scoped";

export default {
  data() {
    return {};
  },
  components: {
    C01,
    C02
  }
};
</script>
<style scoped>
</style>
