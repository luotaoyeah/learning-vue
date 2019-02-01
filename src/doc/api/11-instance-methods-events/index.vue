<template>
  <el-tabs tab-position="left" style="height: 100%;">
    <el-tab-pane label="vm.$on"> <C01></C01> </el-tab-pane>
    <el-tab-pane label="vm.$once"> <C02></C02> </el-tab-pane>
    <el-tab-pane label="vm.$off"> <C03></C03> </el-tab-pane>
    <el-tab-pane label="vm.$emit"> <C04></C04> </el-tab-pane>
  </el-tabs>
</template>

<script>
import C01 from "./01-on";
import C02 from "./02-once";
import C03 from "./03-off";
import C04 from "./04-emit";

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
