<template>
  <fieldset>
    <legend>v-if AND v-for</legend>

    <comp-01 :items="items"></comp-01>
    <comp-02 :items="items"></comp-02>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/render-function.html#replacing-template-features-with-plain-javascript

import comp01 from './v-if-and-v-for.01';
import comp02 from './v-if-and-v-for.02.vue';

export default {
  data() {
    return { items: ['a', 'b', 'c'] };
  },
  components: {
    'comp-01': comp01,
    'comp-02': comp02,
  },
};
</script>
