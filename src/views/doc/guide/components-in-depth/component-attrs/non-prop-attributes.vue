<template>
  <fieldset>
    <!------------------------------------------------------------------------------------------------------
        没有在 props/emits 中定义的 attribute 称之为 non-prop attribute，
        在组件中可以通过 this.$attrs 来访问这些 non-prop attribute，
    ------------------------------------------------------------------------------------------------------->
    <comp-01
      prop01="foo"
      prop02="bar"
      @event01="
        () => {
          return 'foo';
        }
      "
      @event02="
        () => {
          return 'bar';
        }
      "
    ></comp-01>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-attrs.html#non-prop-attributes

import comp01 from './non-prop-attributes.01';

export default {
  components: {
    'comp-01': comp01,
  },
};
</script>
