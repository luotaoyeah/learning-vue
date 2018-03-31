<template>
  <div
    style="padding: 10px;"
  >
    <InteroplationText></InteroplationText>
    <InteroplationHtml></InteroplationHtml>
    <InteroplationAttribute></InteroplationAttribute>
    <InteroplationExpression></InteroplationExpression>
  </div>
</template>
<script>
import InteroplationText from "./interpolation-text";
import InteroplationHtml from "./interpolation-html";
import InteroplationAttribute from "./interpolation-attribute";
import InteroplationExpression from "./interpolation-expression";

export default {
  components: {
    InteroplationText,
    InteroplationHtml,
    InteroplationAttribute,
    InteroplationExpression
  }
};
</script>
<style scoped>
</style>
