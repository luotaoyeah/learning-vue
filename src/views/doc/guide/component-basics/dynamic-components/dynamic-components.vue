<template>
  <fieldset>
    <button @click="current = 'comp-01'">foo</button>
    <button @click="current = 'comp-02'">bar</button>
    <button @click="current = 'comp-03'">baz</button>
    <br />
    <br />
    <component :is="current"></component>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-basics.html#dynamic-components

import comp01 from './dynamic-components.01';
import comp02 from './dynamic-components.02';
import comp03 from './dynamic-components.03';

export default {
  data() {
    return {
      current: 'comp-01',
    };
  },
  components: {
    'comp-01': comp01,
    'comp-02': comp02,
    'comp-03': comp03,
  },
};
</script>

<style lang="less" scoped>
button {
  border-radius: 3px;
  margin-right: 12px;
}
</style>
