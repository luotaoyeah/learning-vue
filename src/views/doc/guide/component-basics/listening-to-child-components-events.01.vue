<template>
  <span :style="{ color: color, borderColor: color }" @click="onClick">
    {{ title }}
  </span>
</template>

<script>
export default {
  props: ['title', 'color'],
  methods: {
    onClick() {
      /*----------------------------------------------------------------------------------------------------
       * 调用 $emit() 方法发起一个事件，
       *----------------------------------------------------------------------------------------------------*/
      this.$emit('change-color');
    },
  },
};
</script>

<style lang="less" scoped>
span {
  border: 1px solid red;
  border-radius: 3px;
  padding: 4px 8px;
  margin-right: 12px;
  cursor: pointer;
}
</style>
