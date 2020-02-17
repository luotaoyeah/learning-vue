<template>
  <fieldset>
    <comp-01
      v-for="item of items"
      :key="item.id"
      :color="color"
      :title="item.value"
      @change-color="onChangeColor"
    ></comp-01>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-basics.html#listening-to-child-components-events

import comp01 from './listening-to-child-components-events.01';

export default {
  data() {
    return {
      items: [
        { id: 1, value: 'blue' },
        { id: 2, value: 'red' },
        { id: 3, value: 'green' },
      ],
      color: 'red',
    };
  },
  methods: {
    onChangeColor() {
      this.color = 'blue';
    },
  },
  components: {
    'comp-01': comp01,
  },
};
</script>
