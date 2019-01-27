<template>
  <div>
    <StyleString></StyleString>
    <StyleObject></StyleObject>
    <StyleArray></StyleArray>
    <AutoPrefixing></AutoPrefixing>
  </div>
</template>
<script>
import StyleString from "./style-string";
import StyleObject from "./style-object";
import StyleArray from "./style-array";
import AutoPrefixing from "./auto-prefixing";

export default {
  components: {
    StyleObject,
    StyleString,
    StyleArray,
    AutoPrefixing
  }
};
</script>
