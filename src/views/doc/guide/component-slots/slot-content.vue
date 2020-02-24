<template>
  <fieldset>
    <my-button>
      <span :style="{ color: 'red' }">CLICK</span>
    </my-button>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-slots.html#slot-content

import comp01 from './slot-content.01';

export default {
  components: {
    'my-button': comp01,
  },
};
</script>
