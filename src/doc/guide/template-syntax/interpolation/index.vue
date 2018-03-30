<template>
  <div
    style="padding: 10px;"
  >
    <InteroplationText></InteroplationText>
    <InteroplationHtml></InteroplationHtml>
    <h1>Attributes</h1>
    <h1>Using Javascript Expressions</h1>
  </div>
</template>
<script>
import InteroplationText from "./interpolation-text";
import InteroplationHtml from "./interpolation-html";

export default {
  components: {
    InteroplationText,
    InteroplationHtml
  }
};
</script>
<style scoped>
</style>
