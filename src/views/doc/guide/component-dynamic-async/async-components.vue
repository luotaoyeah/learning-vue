<template>
  <fieldset>
    <button @click="current = 'comp-01'">comp-01</button>
    <button @click="current = 'comp-02'">comp-02</button>
    <component :is="current"></component>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-dynamic-async.html#async-components

import { defineAsyncComponent } from 'vue';
import comp01 from './async-components.01.vue';

export default {
  data() {
    return {
      current: 'comp-01',
    };
  },
  components: {
    'comp-01': comp01,
    /*----------------------------------------------------------------------------------------------------
     * 使用 defineAsyncComponent() 方法定义一个 async component，
     * 当 async component 被使用时，才会加载，
     *----------------------------------------------------------------------------------------------------*/
    'comp-02': defineAsyncComponent(() => import('./async-components.02.vue')),
  },
};
</script>

<style lang="less" scoped>
button {
  border-radius: 3px;
  margin-right: 12px;
}
</style>
