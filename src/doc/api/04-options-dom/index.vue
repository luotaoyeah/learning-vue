<template>
  <el-tabs tab-position="left" style="height: 100%;">
    <el-tab-pane label="el"> <C01></C01> </el-tab-pane>
    <el-tab-pane label="template"> <C02></C02> </el-tab-pane>
    <el-tab-pane label="render"> <C03></C03> </el-tab-pane>
    <el-tab-pane label="renderError"> <C04></C04> </el-tab-pane>
  </el-tabs>
</template>
<script>
import C01 from "./01-el";
import C02 from "./02-template";
import C03 from "./03-render";
import C04 from "./04-renderError";

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
