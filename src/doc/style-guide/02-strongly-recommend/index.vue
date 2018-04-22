<template>
  <el-tabs
    tab-position="left"
    style="height: 100%;"
  >
    <el-tab-pane label="Component files">
      <C01></C01>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import C01 from "./01-component-files";

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
