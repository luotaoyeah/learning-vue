<template>
  <fieldset>
    <!------------------------------------------------------------------------------------------------------
        通过给 v-model 提供参数，可以同时绑定多个 v-model，包括一个默认的 v-model，
    ------------------------------------------------------------------------------------------------------->
    <comp-01 v-model="value01" v-model:age="age" v-model:name="name"></comp-01>
    <span>{{ name }}</span>
    <span>{{ age }}</span>
    <span>{{ value01 }}</span>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-custom-events.html#multiple-v-model-bindings

import comp01 from './multiple-v-model-bindings.01.vue';

export default {
  data() {
    return {
      value01: 'default',
      name: 'luotao',
      age: 18,
    };
  },
  components: {
    'comp-01': comp01,
  },
};
</script>

<style lang="less" scoped>
span {
  margin-right: 12px;
}
</style>
