<template>
  <el-tabs
    tab-position="left"
    style="height: 100%;"
  >
    <el-tab-pane label=".lazy">
      <C01></C01>
    </el-tab-pane>
    <el-tab-pane label=".number">
      <C02></C02>
    </el-tab-pane>
    <el-tab-pane label=".trim">
      <C03></C03>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import C01 from "./01-lazy";
import C02 from "./02-number";
import C03 from "./03-trim";

export default {
  components: {
    C01,
    C02,
    C03
  }
};
</script>
<style scoped>
</style>
