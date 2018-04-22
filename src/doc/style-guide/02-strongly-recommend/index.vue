<template>
  <el-tabs
    tab-position="left"
    style="height: 100%;"
  >
    <el-tab-pane label="Component files">
      <C01></C01>
    </el-tab-pane>
    <el-tab-pane label="Single-file component filename casing">
      <C02></C02>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import C01 from "./01-component-files";
import C02 from "./02-sfc-filename-casing";

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
