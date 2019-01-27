<template>
  <el-tabs tab-position="left" style="height: 100%;">
    <el-tab-pane label="directives"> <C01></C01> </el-tab-pane>
    <el-tab-pane label="filters"> <C02></C02> </el-tab-pane>
    <el-tab-pane label="components"> <C03></C03> </el-tab-pane>
  </el-tabs>
</template>
<script>
import C01 from "./01-directives";
import C02 from "./02-filters";
import C03 from "./03-components";

export default {
  data() {
    return {};
  },
  components: {
    C01,
    C02,
    C03
  }
};
</script>
