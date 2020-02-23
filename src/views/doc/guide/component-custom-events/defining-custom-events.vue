<template>
  <fieldset>
    <comp-01 @event-01="onEvent01" @event-03="onEvent01"></comp-01>
    <comp-02 @event-02="onEvent02"></comp-02>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-custom-events.html#defining-custom-events

import comp01 from './defining-custom-events.01';
import comp02 from './defining-custom-events.02';

export default {
  methods: {
    onEvent01() {
      console.log(666);
    },
    onEvent02() {
      console.log(888);
    },
  },
  components: {
    'comp-01': comp01,
    'comp-02': comp02,
  },
};
</script>
