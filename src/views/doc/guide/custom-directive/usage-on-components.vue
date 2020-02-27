<template>
  <fieldset>
    <comp-01 v-dir-01></comp-01>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/custom-directive.html#usage-on-components

import comp01 from './usage-on-components.01.vue';

/*----------------------------------------------------------------------------------------------------
 * 当 custom directive 用在组件上：
 *   如果组件只有一个 root element，则 directive 实际上就是应用在这个 root element 上，
 *   如果组件有多个 root element，则 directive 会被忽略，并且会有警告，
 *----------------------------------------------------------------------------------------------------*/

export default {
  directives: {
    'dir-01': {
      mounted(el) {
        console.assert(el.dataset.id === 'usage-on-components.01.vue');
      },
    },
  },
  components: {
    'comp-01': comp01,
  },
};
</script>

<style lang="less" scoped></style>
