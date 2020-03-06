<template>
  <fieldset>
    <comp-01></comp-01>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-basics.html#base-example

import comp01 from './base-example.01.vue';

export default {
  data() {
    return {};
  },
  components: {
    'comp-01': comp01,
  },
};
</script>
