<template>
  <fieldset>
    <comp-01></comp-01>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/render-function.html#constraints

import comp01 from './constraints.01';

export default {
  components: {
    'comp-01': comp01,
  },
};
</script>
