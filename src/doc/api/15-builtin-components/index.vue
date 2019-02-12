<template>
  <el-tabs tabPosition="right" style="height: 100%;">
    <el-tab-pane label="component"> <C01></C01> </el-tab-pane>
    <el-tab-pane label="transition"> <C02></C02> </el-tab-pane>
    <el-tab-pane label="transition-group"> <C03></C03> </el-tab-pane>
    <el-tab-pane label="keep-alive"> <C04></C04> </el-tab-pane>
    <el-tab-pane label="slot"> <C05></C05> </el-tab-pane>
  </el-tabs>
</template>

<script>
import C01 from "./01-component";
import C02 from "./02-transition";
import C03 from "./03-transition-group";
import C04 from "./04-keep-alive";
import C05 from "./05-slot";

export default {
  data() {
    return {};
  },
  components: {
    C01,
    C02,
    C03,
    C04,
    C05
  }
};
</script>
