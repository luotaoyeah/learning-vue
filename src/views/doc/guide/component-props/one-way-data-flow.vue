<template>
  <fieldset>
    <comp-01 :person="person"></comp-01>
    <span>{{ person.name }}</span>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-props.html#one-way-data-flow

import comp01 from './one-way-data-flow.01';

export default {
  data() {
    return {
      person: { name: 'luotao' },
    };
  },
  components: {
    'comp-01': comp01,
  },
};
</script>
