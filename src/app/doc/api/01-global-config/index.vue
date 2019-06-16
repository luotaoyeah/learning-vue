<template>
  <el-tabs tabPosition="right" style="height: 100%;">
    <el-tab-pane label="silent"> <C01></C01> </el-tab-pane>
    <el-tab-pane label="optionMergeStrategies"> <C02></C02> </el-tab-pane>
    <el-tab-pane label="devtools"> <C03></C03> </el-tab-pane>
    <el-tab-pane label="errorHandler"> <C04></C04> </el-tab-pane>
    <el-tab-pane label="warnHandler"> <C05></C05> </el-tab-pane>
    <el-tab-pane label="ignoredElements"> <C06></C06> </el-tab-pane>
    <el-tab-pane label="keyCodes"> <C07></C07> </el-tab-pane>
    <el-tab-pane label="performance"> <C08></C08> </el-tab-pane>
    <el-tab-pane label="productionTip"> <C09></C09> </el-tab-pane>
  </el-tabs>
</template>

<script>
import C01 from "./01-silent";
import C02 from "./02-optionMergeStrategies";
import C03 from "./03-devtools";
import C04 from "./04-errorHandler";
import C05 from "./05-warnHandler";
import C06 from "./06-ignoredElements";
import C07 from "./07-keyCodes";
import C08 from "./08-performance";
import C09 from "./09-productionTip";

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
    C09
  }
};
</script>
