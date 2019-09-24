<template>
  <el-tabs tabPosition="right" style="height: 100%;">
    <el-tab-pane label="extend"> <C01></C01> </el-tab-pane>
    <el-tab-pane label="nextTick"> <C02></C02> </el-tab-pane>
    <el-tab-pane label="set"> <C03></C03> </el-tab-pane>
    <el-tab-pane label="delete"> <C04></C04> </el-tab-pane>
    <el-tab-pane label="directive"> <C05></C05> </el-tab-pane>
    <el-tab-pane label="filter"> <C06></C06> </el-tab-pane>
    <el-tab-pane label="component"> <C07></C07> </el-tab-pane>
    <el-tab-pane label="use"> <C08></C08> </el-tab-pane>
    <el-tab-pane label="mixin"> <C09></C09> </el-tab-pane>
    <el-tab-pane label="compile"> <C10></C10> </el-tab-pane>
    <el-tab-pane label="version"> <C11></C11> </el-tab-pane>
  </el-tabs>
</template>

<script>
import C01 from "./01-extend";
import C02 from "./02-nextTick";
import C03 from "./03-set";
import C04 from "./04-delete";
import C05 from "./05-directive";
import C06 from "./06-filter";
import C07 from "./07-component";
import C08 from "./08-use";
import C09 from "./09-mixin";
import C10 from "./10-compile";
import C11 from "./11-version";

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
    C06,
    C07,
    C08,
    C09,
    C10,
    C11,
  },
};
</script>
