<template>
  <fieldset>
    <my-button></my-button>
    <my-button>888</my-button>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-slots.html#fallback-content

import comp01 from './fallback-content.01.vue';

export default {
  components: {
    'my-button': comp01,
  },
};
</script>
