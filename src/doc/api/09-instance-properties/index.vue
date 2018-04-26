<template>
  <el-tabs
    tab-position="left"
    style="height: 100%;"
  >
    <el-tab-pane label="vm.$data">
      <C01></C01>
    </el-tab-pane>
    <el-tab-pane label="vm.$props">
      <C02></C02>
    </el-tab-pane>
    <el-tab-pane label="vm.$el">
      <C03></C03>
    </el-tab-pane>
    <el-tab-pane label="vm.$options">
      <C04></C04>
    </el-tab-pane>
    <el-tab-pane label="vm.$parent">
      <C05></C05>
    </el-tab-pane>
    <el-tab-pane label="vm.$root">
      <C06></C06>
    </el-tab-pane>
    <el-tab-pane label="vm.$children">
      <C07></C07>
    </el-tab-pane>
    <el-tab-pane label="vm.$slots">
      <C08></C08>
    </el-tab-pane>
    <el-tab-pane label="vm.$scopedSlots">
      <C09></C09>
    </el-tab-pane>
    <el-tab-pane label="vm.$refs">
      <C10></C10>
    </el-tab-pane>
    <el-tab-pane label="vm.$isServer">
      <C11></C11>
    </el-tab-pane>
    <el-tab-pane label="vm.$attrs">
      <C12></C12>
    </el-tab-pane>
    <el-tab-pane label="vm.$listeners">
      <C13></C13>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import C01 from "./01-data";
import C02 from "./02-props";
import C03 from "./03-el";
import C04 from "./04-options";
import C05 from "./05-parent";
import C06 from "./06-root";
import C07 from "./07-children";
import C08 from "./08-slots";
import C09 from "./09-scopedSlots";
import C10 from "./10-refs";
import C11 from "./11-isServer";
import C12 from "./12-attrs";
import C13 from "./13-listeners";

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
    C12,
    C13
  }
};
</script>
<style scoped>
</style>
