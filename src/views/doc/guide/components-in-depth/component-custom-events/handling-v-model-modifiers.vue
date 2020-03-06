<template>
  <fieldset>
    <comp-01 v-model.upperFirst="value01" v-model:name.upperFirst="name"></comp-01>
    <span>{{ value01 }}</span>
    <span>{{ name }}</span>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-custom-events.html#handling-v-model-modifiers

import comp01 from './handling-v-model-modifiers.01.vue';

export default {
  data() {
    return {
      value01: '',
      name: '',
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
