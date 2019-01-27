<template>
  <el-tabs tab-position="left" style="height: 100%;">
    <el-tab-pane label="name"> <C01></C01> </el-tab-pane>
    <el-tab-pane label="delimiters"> <C02></C02> </el-tab-pane>
    <el-tab-pane label="functional"> <C03></C03> </el-tab-pane>
    <el-tab-pane label="model"> <C04></C04> </el-tab-pane>
    <el-tab-pane label="inheritAttrs"> <C05></C05> </el-tab-pane>
    <el-tab-pane label="comments"> <C06></C06> </el-tab-pane>
  </el-tabs>
</template>
<script>
import C01 from "./01-name";
import C02 from "./02-delimiters";
import C03 from "./03-functional";
import C04 from "./04-model";
import C05 from "./05-inheritAttrs";
import C06 from "./06-comments";

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
