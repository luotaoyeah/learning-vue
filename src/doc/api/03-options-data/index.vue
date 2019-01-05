<template>
  <el-tabs tab-position="left" style="height: 100%;">
    <el-tab-pane label="data"> <C01></C01> </el-tab-pane>
    <el-tab-pane label="props"> <C02></C02> </el-tab-pane>
    <el-tab-pane label="propsData"> <C03></C03> </el-tab-pane>
    <el-tab-pane label="computed"> <C04></C04> </el-tab-pane>
    <el-tab-pane label="methods"> <C05></C05> </el-tab-pane>
    <el-tab-pane label="watch"> <C06></C06> </el-tab-pane>
  </el-tabs>
</template>
<script>
import C01 from "./01-data";
import C02 from "./02-props";
import C03 from "./03-propsData";
import C04 from "./04-computed";
import C05 from "./05-methods";
import C06 from "./06-watch";

export default {
  data() {
    return {};
  },
  components: {
    C01,
    C02,
    C03,
    C04,
    C05,
    C06
  }
};
</script>
<style scoped></style>
