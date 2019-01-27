<template>
  <el-tabs tab-position="left" style="height: 100%;">
    <el-tab-pane label="v-text"> <C01></C01> </el-tab-pane>
    <el-tab-pane label="v-html"> <C02></C02> </el-tab-pane>
    <el-tab-pane label="v-show"> <C03></C03> </el-tab-pane>
    <el-tab-pane label="v-if"> <C04></C04> </el-tab-pane>
    <el-tab-pane label="v-else"> <C05></C05> </el-tab-pane>
    <el-tab-pane label="v-else-if"> <C06></C06> </el-tab-pane>
    <el-tab-pane label="v-for"> <C07></C07> </el-tab-pane>
    <el-tab-pane label="v-on"> <C08></C08> </el-tab-pane>
    <el-tab-pane label="v-bind"> <C09></C09> </el-tab-pane>
    <el-tab-pane label="v-model"> <C10></C10> </el-tab-pane>
    <el-tab-pane label="v-pre"> <C11></C11> </el-tab-pane>
    <el-tab-pane label="v-cloak"> <C12></C12> </el-tab-pane>
    <el-tab-pane label="v-once"> <C13></C13> </el-tab-pane>
  </el-tabs>
</template>
<script>
import C01 from "./01-v-text";
import C02 from "./02-v-html";
import C03 from "./03-v-show";
import C04 from "./04-v-if";
import C05 from "./05-v-else";
import C06 from "./06-v-else-if";
import C07 from "./07-v-for";
import C08 from "./08-v-on";
import C09 from "./09-v-bind";
import C10 from "./10-v-model";
import C11 from "./11-v-pre";
import C12 from "./12-v-cloak";
import C13 from "./13-v-once";

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
