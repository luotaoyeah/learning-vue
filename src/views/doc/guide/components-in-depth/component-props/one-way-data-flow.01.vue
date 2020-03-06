<template>
  <button @click="onClick01">{{ person.name }}</button>
  <button @click="onClick02">{{ person.name }}</button>
</template>

<script>
export default {
  props: ['person'],
  methods: {
    onClick01() {
      /*----------------------------------------------------------------------------------------------------
       * prop 是 readonly 的，直接修改 prop 会运行报错，也会 lint 报错，
       *----------------------------------------------------------------------------------------------------*/
      // eslint-disable-next-line vue/no-mutating-props
      this.person = { name: 'foo' };
    },
    onClick02() {
      /*----------------------------------------------------------------------------------------------------
       * 如果 prop 是一个 object/array，直接修改它的内部属性，不会运行报错，但会 lint 报错，
       * 但是违反了单向数据流的原则，并且影响了父组件，
       *----------------------------------------------------------------------------------------------------*/
      // eslint-disable-next-line vue/no-mutating-props
      this.person.name = 'bar';
    },
  },
};
</script>

<style lang="less" scoped>
button {
  border-radius: 3px;
  margin-right: 12px;
}
</style>
