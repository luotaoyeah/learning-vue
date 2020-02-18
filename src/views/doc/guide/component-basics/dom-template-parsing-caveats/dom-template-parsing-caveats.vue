<template>
  <fieldset>
    <table>
      <tr>
        <th>name</th>
        <th>age</th>
      </tr>
      <!------------------------------------------------------------------------------------------------------
          HTML 对于标签的嵌套关系有一些要求，比如 tr/td 必须配套使用，ul/li 必须配套使用，select/option 必须配套使用，
          当它们跟自定义组件一起使用时，就会解析报错，可以如下解决：v-is 的值为组件的名称，
      ------------------------------------------------------------------------------------------------------->
      <comp-01></comp-01>
      <tr v-is="'comp-01'"></tr>
    </table>
  </fieldset>

  <fieldset>
    <!------------------------------------------------------------------------------------------------------
        HTML 是 case-insensitive 的，props 和 event 的名称都必须使用 kebab-case，
        但是在 sfc 的 template 中，kebab-case 和 camelCase 都可以使用，
    ------------------------------------------------------------------------------------------------------->
    <comp-02 :model-value="value01" @update:model-value="value01 = $event"></comp-02>
    <span>{{ value01 }}</span>
    <br />
    <comp-02 :modelValue="value02" @update:modelValue="value02 = $event"></comp-02>
    <span>{{ value02 }}</span>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-basics.html#dom-template-parsing-caveats

import comp01 from './dom-template-parsing-caveats.01';
import comp02 from './dom-template-parsing-caveats.02';

export default {
  data() {
    return { value01: '', value02: '' };
  },
  components: {
    'comp-01': comp01,
    'comp-02': comp02,
  },
};
</script>
