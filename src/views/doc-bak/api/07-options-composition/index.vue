<template>
  <el-tabs tabPosition="right" style="height: 100%;">
    <el-tab-pane label="parent"> <C01></C01> </el-tab-pane>
    <el-tab-pane label="mixins"> <C02></C02> </el-tab-pane>
    <el-tab-pane label="extends"> <C03></C03> </el-tab-pane>
    <el-tab-pane label="provide-inject"> <C04></C04> </el-tab-pane>
  </el-tabs>
</template>

<script>
import C01 from "./01-parent";
import C02 from "./02-mixins";
import C03 from "./03-extends";
import C04 from "./04-provide-inject";

export default {
  data() {
    return {};
  },
  components: {
    C01,
    C02,
    C03,
    C04,
  },
};
</script>
