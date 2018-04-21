<template>
  <el-tabs
    tab-position="left"
    style="height: 100%;"
  >
    <el-tab-pane label="How Changes are Tracked">
      <C01></C01>
    </el-tab-pane>
    <el-tab-pane label="Change Detection Caveats">
      <C02></C02>
    </el-tab-pane>
    <el-tab-pane label="Declaring Reactive Properties">
      <C03></C03>
    </el-tab-pane>
    <el-tab-pane label="Async Update Qunee">
      <C04></C04>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import C01 from "./01-how-changes-are-tracked";
import C02 from "./02-change-detection-caveats";
import C03 from "./03-declaring-reactive-properties";
import C04 from "./04-async-update-qunee";

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
<style scoped>
</style>
