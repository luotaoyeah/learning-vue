<template>
  <fieldset>
    <!------------------------------------------------------------------------------------------------------
        实现自己的 v-model 时，默认的属性和事件必须为 modelValue 和 update:modelValue，
        如果要用其他的属性和事件，比如 title 和 update:title，则需要用 v-model:title 来绑定，
        也就是要将 prop 名称作为 v-model 的参数，
    ------------------------------------------------------------------------------------------------------->
    <comp-01 v-model:title="value01"></comp-01>
    <span>{{ value01 }}</span>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-custom-events.html#v-model-arguments

import comp01 from './v-model-arguments.01';

export default {
  data() {
    return {
      value01: '',
    };
  },
  components: {
    'comp-01': comp01,
  },
};
</script>
