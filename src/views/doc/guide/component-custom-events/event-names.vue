<template>
  <fieldset>
    <comp-01 @some-event="onSomeEvent"></comp-01>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-custom-events.html#event-names

import comp01 from './event-names.01.vue';

export default {
  methods: {
    onSomeEvent() {
      console.log(666);
    },
  },
  components: {
    'comp-01': comp01,
  },
};
</script>
