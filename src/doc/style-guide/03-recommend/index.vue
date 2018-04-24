<template>
  <el-tabs
    tab-position="left"
    style="height: 100%;"
  >
    <el-tab-pane label="Component options order">
      <C01></C01>
    </el-tab-pane>
    <el-tab-pane label="Element attribute order">
      <C02></C02>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import C01 from "./01-component-options-order";
import C02 from "./02-element-attribute-order";

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
<style scoped>
</style>
