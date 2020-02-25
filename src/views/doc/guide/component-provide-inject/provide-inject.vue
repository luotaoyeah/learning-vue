<template>
  <fieldset>
    <comp-01></comp-01>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-provide-inject.html#provide-inject

import comp01 from './provide-inject.01';

/*----------------------------------------------------------------------------------------------------
 * 如果需要从父组件传递数据到很深层的子组件，如果使用 props 传递，则需要一层一层传递，非常繁琐，
 * 可以使用 provide/inject 功能实现这个需求： 父组件 provide 某些数据，任意层的子组件都可以 inject 它需要的数据，
 *----------------------------------------------------------------------------------------------------*/

export default {
  provide: {
    value01: 'a',
  },
  components: {
    'comp-01': comp01,
  },
};
</script>
