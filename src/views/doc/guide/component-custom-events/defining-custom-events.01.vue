<template>
  <button @click="onClick">CLICK</button>
</template>

<script>
export default {
  /*----------------------------------------------------------------------------------------------------
   * 可以在 emits 中声明所有事件，作用有两个：
   *   1. 可以一眼看出组件发出了哪些事件，
   *   2. 可以对事件进行验证，
   *
   * 如果发出的事件没有声明，会有一个警告，
   * 如果声明的事件没有发出，不会有啥影响，
   *----------------------------------------------------------------------------------------------------*/
  emits: ['event-01', 'event-03'],
  methods: {
    onClick() {
      this.$emit('event-01');
      this.$emit('event-02');
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
