<template>
  <fieldset>
    <comp-01 :text="'true'"></comp-01>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-props.html#prop-types

import comp01 from './prop-types.01.vue';

export default {
  components: {
    'comp-01': comp01,
  },
};
</script>
