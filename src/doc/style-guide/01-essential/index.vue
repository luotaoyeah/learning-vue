<template>
  <el-tabs tab-position="left" style="height: 100%;">
    <el-tab-pane label="Muli-word component names"> <C01></C01> </el-tab-pane>
    <el-tab-pane label="Component data"> <C02></C02> </el-tab-pane>
    <el-tab-pane label="Prop Definitions"> <C03></C03> </el-tab-pane>
    <el-tab-pane label="Keyed v-for"> <C04></C04> </el-tab-pane>
    <el-tab-pane label="Avoid v-if with v-for"> <C05></C05> </el-tab-pane>
    <el-tab-pane label="Component style scoping"> <C06></C06> </el-tab-pane>
    <el-tab-pane label="Private property names"> <C07></C07> </el-tab-pane>
  </el-tabs>
</template>
<script>
import C01 from "./01-multiword-component-names";
import C02 from "./02-component-data";
import C03 from "./03-props-definitions";
import C04 from "./04-keyed-vfor";
import C05 from "./05-avoid-vif-with-vfor";
import C06 from "./06-component-style-scope";
import C07 from "./07-private-property-names";

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
    C07
  }
};
</script>
