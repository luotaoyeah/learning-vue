<template>
  <div>
    <el-tabs
      tab-position="left"
      style="height: 100%;"
    >
      <el-tab-pane label="Basics">
        <Basics></Basics>
      </el-tab-pane>
      <el-tab-pane label="Option Merging">
        <OptionMerging></OptionMerging>
      </el-tab-pane>
      <el-tab-pane label="Global Mixin">
        <GlobalMixin></GlobalMixin>
      </el-tab-pane>
      <el-tab-pane label="Custom Option Merge Strategies">
        <CustomOptionMergeStrategies></CustomOptionMergeStrategies>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Basics from "./01-basics";
import OptionMerging from "./02-option-merging";
import GlobalMixin from "./03-global-mixin";
import CustomOptionMergeStrategies from "./04-custom-option-merge-strategies";

export default {
  data() {
    return {};
  },
  components: {
    Basics,
    OptionMerging,
    GlobalMixin,
    CustomOptionMergeStrategies
  }
};
</script>
<style scoped>
</style>
