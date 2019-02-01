<template>
  <el-tabs tab-position="left" style="height: 100%;">
    <el-tab-pane label="vm.$mount"> <C01></C01> </el-tab-pane>
    <el-tab-pane label="vm.$forceUpdate"> <C02></C02> </el-tab-pane>
    <el-tab-pane label="vm.$nextTick"> <C03></C03> </el-tab-pane>
    <el-tab-pane label="vm.$destroy"> <C04></C04> </el-tab-pane>
  </el-tabs>
</template>

<script>
import C01 from "./01-mount";
import C02 from "./02-forceUpdate";
import C03 from "./03-nextTick";
import C04 from "./04-destroy";

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
