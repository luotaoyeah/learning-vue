<template>
  <my-modal v-model="visible"></my-modal>
</template>

<script>
// https://v3.vuejs.org/guide/teleport.html#teleport

import comp01 from './teleport.01.vue';

/*----------------------------------------------------------------------------------------------------
 * teleport 类似 react 的 portal，
 *----------------------------------------------------------------------------------------------------*/

export default {
  data() {
    return { visible: false };
  },
  components: {
    'my-modal': comp01,
  },
};
</script>
