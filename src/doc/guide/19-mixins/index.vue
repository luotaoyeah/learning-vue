<template>
  <div>
    <el-tabs tab-position="left" style="height: 100%;">
      <el-tab-pane label="C01"> <C01></C01> </el-tab-pane>
      <el-tab-pane label="Option Merging"> <C02></C02> </el-tab-pane>
      <el-tab-pane label="Global Mixin"> <C03></C03> </el-tab-pane>
      <el-tab-pane label="Custom Option Merge Strategies">
        <C04></C04>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import C01 from "./01-basics";
import C02 from "./02-option-merging";
import C03 from "./03-global-mixin";
import C04 from "./04-custom-option-merge-strategies";

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
