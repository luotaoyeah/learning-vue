<template>
  <fieldset>
    <!------------------------------------------------------------------------------------------------------
        dynamic component 使用 <keep-alive> 包裹，则组件会被缓存，
    ------------------------------------------------------------------------------------------------------->
    <button @click="current = 'comp-01'">comp-01</button>
    <button @click="current = 'comp-02'">comp-02</button>
    <keep-alive>
      <component :is="current"></component>
    </keep-alive>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-dynamic-async.html#dynamic-components-with-keep-alive

import comp01 from './dynamic-components-with-keep-alive.01.vue';
import comp02 from './dynamic-components-with-keep-alive.02.vue';

export default {
  data() {
    return {
      current: 'comp-01',
    };
  },
  components: {
    'comp-01': comp01,
    'comp-02': comp02,
  },
};
</script>

<style lang="less" scoped>
button {
  border-radius: 3px;
  margin-right: 12px;
}
</style>
