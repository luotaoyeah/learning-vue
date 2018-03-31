<template>
  <div
    style="padding: 10px;"
  >
    <InteroplationText></InteroplationText>
    <InteroplationHtml></InteroplationHtml>
    <InteroplationAttribute></InteroplationAttribute>
    <h1>Using Javascript Expressions</h1>
  </div>
</template>
<script>
import InteroplationText from "./interpolation-text";
import InteroplationHtml from "./interpolation-html";
import InteroplationAttribute from "./interpolation-attribute";

export default {
  components: {
    InteroplationText,
    InteroplationHtml,
    InteroplationAttribute
  }
};
</script>
<style scoped>
</style>
