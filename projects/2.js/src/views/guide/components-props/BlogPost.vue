<template>
  <fieldset>
    <legend>
      {{ title }}
    </legend>

    <p>{{ content }}</p>
  </fieldset>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    title: String,
    content: String,
  },
};
</script>

<style scoped></style>
