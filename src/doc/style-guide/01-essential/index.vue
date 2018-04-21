<template>
  <el-tabs
    tab-position="left"
    style="height: 100%;"
  >
    <el-tab-pane label="Muli-word component names">
      <C01></C01>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import C01 from "./01-multiword-component-names";

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
