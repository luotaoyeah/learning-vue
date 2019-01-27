<template>
  <el-tabs tab-position="left" style="height: 100%;">
    <el-tab-pane label="beforeCreate"> <C01></C01> </el-tab-pane>
    <el-tab-pane label="created"> <C02></C02> </el-tab-pane>
    <el-tab-pane label="beforeMount"> <C03></C03> </el-tab-pane>
    <el-tab-pane label="mounted"> <C04></C04> </el-tab-pane>
    <el-tab-pane label="beforeUpdate"> <C05></C05> </el-tab-pane>
    <el-tab-pane label="updated"> <C06></C06> </el-tab-pane>
    <el-tab-pane label="activated"> <C07></C07> </el-tab-pane>
    <el-tab-pane label="deactivated"> <C08></C08> </el-tab-pane>
    <el-tab-pane label="beforeDestroy"> <C09></C09> </el-tab-pane>
    <el-tab-pane label="destroyed"> <C10></C10> </el-tab-pane>
    <el-tab-pane label="errorCaptured"> <C11></C11> </el-tab-pane>
  </el-tabs>
</template>
<script>
import C01 from "./01-beforeCreate";
import C02 from "./02-created";
import C03 from "./03-beforeMount";
import C04 from "./04-mounted";
import C05 from "./05-beforeUpdate";
import C06 from "./06-updated";
import C07 from "./07-activated";
import C08 from "./08-deactivated";
import C09 from "./09-beforeDestroy";
import C10 from "./10-destroyed";
import C11 from "./11-errorCaptured";

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
    C11
  }
};
</script>
