<template>
  <el-tabs
    tab-position="left"
    style="height: 100%;"
  >
    <el-tab-pane label="v-if / v-else with key">
      <C01></C01>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import C01 from "./01-vif-with-key";

export default {
  data() {
    return {};
  },
  components: {
    C01
  }
};
</script>
<style scoped>
</style>
