<template>
  <fieldset>
    <my-button>CLICK</my-button>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-basics.html#content-distribution-with-slots

import comp01 from './content-distribution-with-slots.01';

export default {
  data() {
    return {};
  },
  components: {
    'my-button': comp01,
  },
};
</script>
