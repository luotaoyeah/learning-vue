<template>
  <div>
    <C01></C01>
    <C02></C02>
  </div>
</template>
<script>
import C01 from "./06-01-passing-attributes-and-events-to-child-elements";
import C02 from "./06-02-slots-vs-children";

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
