<template>
  <div>
    <VIfOnTemplate></VIfOnTemplate>
    <VElse></VElse>
    <ControlReusableElementsWithKey></ControlReusableElementsWithKey>
  </div>
</template>
<script>
import VIfOnTemplate from "./v-if-on-template";
import VElse from "./v-else";
import ControlReusableElementsWithKey from "./control-reusable-elements-with-key";

export default {
  data() {
    return {};
  },
  components: {
    VIfOnTemplate,
    VElse,
    ControlReusableElementsWithKey
  }
};
</script>
