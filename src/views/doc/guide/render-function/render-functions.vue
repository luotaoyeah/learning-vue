<template>
  <fieldset>
    <my-heading :level="1">1</my-heading>
    <my-heading :level="2">2</my-heading>
    <my-heading :level="3">3</my-heading>
    <my-heading :level="4">4</my-heading>
    <my-heading :level="5">5</my-heading>
    <my-heading :level="6">6</my-heading>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/render-function.html#render-functions

import comp01 from './render-functions.01';

export default {
  components: {
    'my-heading': comp01,
  },
};
</script>
