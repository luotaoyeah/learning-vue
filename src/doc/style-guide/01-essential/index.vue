<template>
  <el-tabs
    tab-position="left"
    style="height: 100%;"
  >
    <el-tab-pane label="Muli-word component names">
      <C01></C01>
    </el-tab-pane>
    <el-tab-pane label="Component data">
      <C02></C02>
    </el-tab-pane>
    <el-tab-pane label="Prop Definitions">
      <C03></C03>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import C01 from "./01-multiword-component-names";
import C02 from "./02-component-data";
import C03 from "./03-props-definitions";

export default {
  data() {
    return {};
  },
  components: {
    C01,
    C02,
    C03
  }
};
</script>
<style scoped>
</style>
