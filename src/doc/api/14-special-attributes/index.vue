<template>
  <el-tabs tab-position="left" style="height: 100%;">
    <el-tab-pane label="key"> <C01></C01> </el-tab-pane>
    <el-tab-pane label="ref"> <C02></C02> </el-tab-pane>
    <el-tab-pane label="slot"> <C03></C03> </el-tab-pane>
    <el-tab-pane label="slot-scope"> <C04></C04> </el-tab-pane>
    <el-tab-pane label="scope"> <C05></C05> </el-tab-pane>
    <el-tab-pane label="is"> <C06></C06> </el-tab-pane>
  </el-tabs>
</template>
<script>
import C01 from "./01-key";
import C02 from "./02-ref";
import C03 from "./03-slot";
import C04 from "./04-slot-scope";
import C05 from "./05-scope";
import C06 from "./06-is";

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
    C06
  }
};
</script>
