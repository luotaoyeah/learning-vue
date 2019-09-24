<template>
  <el-tabs tabPosition="right" style="height: 100%;">
    <el-tab-pane label="vm.$watch"> <C01></C01> </el-tab-pane>
    <el-tab-pane label="vm.$set"> <C02></C02> </el-tab-pane>
    <el-tab-pane label="vm.$delete"> <C03></C03> </el-tab-pane>
  </el-tabs>
</template>

<script>
import C01 from "./01-watch";
import C02 from "./02-set";
import C03 from "./03-delete";

export default {
  data() {
    return {};
  },
  components: {
    C01,
    C02,
    C03,
  },
};
</script>
