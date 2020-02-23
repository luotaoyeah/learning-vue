<template>
  <button @click="onClick">CLICK</button>
</template>

<script>
// https://v3.vuejs.org/guide/component-custom-events.html#validate-emitted-events

export default {
  emits: {
    /*----------------------------------------------------------------------------------------------------
     * null 表示没有验证
     *----------------------------------------------------------------------------------------------------*/
    'event-01': null,
    'event-02': (x, y) => {
      /*----------------------------------------------------------------------------------------------------
       * 返回 false 表示验证失败，会有一个警告，
       *----------------------------------------------------------------------------------------------------*/
      return x > y;
    },
  },
  methods: {
    onClick() {
      this.$emit('event-02');
    },
  },
};
</script>

<style lang="less" scoped>
button {
  border-radius: 3px;
}
</style>
