<template>
  <div>
    <DynamicAsyncComponentDynamic></DynamicAsyncComponentDynamic>
    <DynamicAsyncComponentAsync></DynamicAsyncComponentAsync>
  </div>
</template>
<script>
import DynamicAsyncComponentDynamic from "./dynamic-async-component-dynamic-component";
import DynamicAsyncComponentAsync from "./dynamic-async-component-async-component";

export default {
  data() {
    return {};
  },
  components: {
    DynamicAsyncComponentDynamic,
    DynamicAsyncComponentAsync
  }
};
</script>
<style scoped>
</style>
