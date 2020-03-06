<template>
  <fieldset>
    <!------------------------------------------------------------------------------------------------------
        通过 ref 绑定标签的 DOM 对象或者组件实例对象，
    ------------------------------------------------------------------------------------------------------->
    <span ref="spanEl"></span>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-template-refs.html#template-refs

export default {
  mounted() {
    console.assert(this.$refs.spanEl instanceof HTMLSpanElement);
  },
};
</script>
