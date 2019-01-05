<template>
  <el-tabs tab-position="left" style="height: 100%;">
    <el-tab-pane label="Dynamic Components"> <C01></C01> </el-tab-pane>
    <el-tab-pane label="Async Components"> <C02></C02> </el-tab-pane>
  </el-tabs>
</template>
<script>
import C01 from "./01-dynamic-async-component-dynamic-component";
import C02 from "./02-dynamic-async-component-async-component";

export default {
  data() {
    return {};
  },
  components: {
    C01,
    C02
  }
};
</script>
<style scoped></style>
