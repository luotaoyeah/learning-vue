<template>
  <fieldset>
    <comp-01 :style="{ borderRadius: '3px' }" @click="onClick"></comp-01>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-attrs.html#disabling-attribute-inheritance

import comp01 from './disabling-attribute-inheritance.01.vue';

export default {
  methods: {
    onClick() {
      console.log(666);
    },
  },
  components: {
    'comp-01': comp01,
  },
};
</script>
