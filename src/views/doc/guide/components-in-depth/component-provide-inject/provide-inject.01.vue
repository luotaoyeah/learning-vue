<template>
  <input v-model="value02" type="text" />
  <input v-model="value03" type="text" />
  <comp-01></comp-01>
</template>

<script>
import * as Vue from 'vue';
import comp01 from './provide-inject.01.01';

export default {
  data() {
    return {
      value02: 'b',
      value03: 'c',
    };
  },
  /*----------------------------------------------------------------------------------------------------
   * 如果 provide 使用了组件的数据，则需要使用 function 的形式返回数据对象，
   * TODO provide 数据默认没有 reactive 特性，
   *----------------------------------------------------------------------------------------------------*/
  provide() {
    return {
      value02: this.value02,
      value03: Vue.computed(() => this.value03),
    };
  },
  components: {
    'comp-01': comp01,
  },
};
</script>

<style lang="less" scoped>
input {
  border-radius: 3px;
  margin-right: 12px;
}
</style>
