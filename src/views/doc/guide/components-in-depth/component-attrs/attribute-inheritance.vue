<template>
  <fieldset>
    <!------------------------------------------------------------------------------------------------------
        如果组件只有一个 root element，则所有的 non-prop attribute 都会继承到 root element 上，包括事件监听，
    ------------------------------------------------------------------------------------------------------->
    <comp-01 :style="{ borderRadius: '3px' }" @click="onClick">CLICK</comp-01>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-attrs.html#attribute-inheritance

import comp01 from './attribute-inheritance.01';

export default {
  methods: {
    onClick() {
      console.log(666);
    },
  },
  components: {
    'comp-01': comp01,
  },
};
</script>
