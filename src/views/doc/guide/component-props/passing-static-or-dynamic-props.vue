<template>
  <fieldset>
    <!------------------------------------------------------------------------------------------------------
        当一个 object 的每一个 property 都作为 prop 传递时，可以使用如下的语法糖：
    ------------------------------------------------------------------------------------------------------->
    <comp-01 v-bind:id="obj01.id" v-bind:title="obj01.title"></comp-01>
    <comp-01 v-bind="obj01"></comp-01>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-props.html#passing-the-properties-of-an-object

import comp01 from './passing-static-or-dynamic-props.01';

export default {
  data() {
    return {
      obj01: {
        id: 1,
        title: 'a',
      },
    };
  },
  components: {
    'comp-01': comp01,
  },
};
</script>
