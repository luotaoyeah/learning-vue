<template>
  <fieldset>
    <my-button>
      <!------------------------------------------------------------------------------------------------------
          在子组件标签中间，可以访问父组件的数据，不能访问子组件的数据，
          因为这一块也是属于父组件的 template 的一部分，
      ------------------------------------------------------------------------------------------------------->
      {{ x }}
    </my-button>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-slots.html#render-scope

import comp01 from './render-scope.01';

export default {
  data() {
    return {
      x: 'x',
    };
  },
  components: {
    'my-button': comp01,
  },
};
</script>
