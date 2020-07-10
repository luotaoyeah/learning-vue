<template>
  <div>
    <fieldset>
      <legend>Raw HTML</legend>

      <span v-html="rawHtml"></span>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'TemplateSyntax',
  data() {
    return {
      rawHtml: '<span style="color: red;">v-html</span>',
    };
  },
};
</script>

<style scoped></style>
