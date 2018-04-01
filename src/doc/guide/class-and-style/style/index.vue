<template>
  <div
    style="padding: 10px;"
  >
    <StyleString></StyleString>
    <StyleObject></StyleObject>
    <StyleArray></StyleArray>
  </div>
</template>
<script>
import StyleString from "./style-string";
import StyleObject from "./style-object";
import StyleArray from "./style-array";

export default {
  components: {
    StyleObject,
    StyleString,
    StyleArray
  }
};
</script>
<style scoped>
</style>
