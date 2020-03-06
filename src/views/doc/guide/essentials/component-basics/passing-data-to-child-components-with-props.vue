<template>
  <fieldset>
    <comp-01 v-for="item of items" :key="item.id" :title="item.value"></comp-01>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-basics.html#passing-data-to-child-components-with-props

import comp01 from './passing-data-to-child-components-with-props.01';

export default {
  data() {
    return {
      items: [
        { id: 1, value: 'a' },
        { id: 2, value: 'b' },
        { id: 3, value: 'c' },
      ],
    };
  },
  components: {
    'comp-01': comp01,
  },
};
</script>
