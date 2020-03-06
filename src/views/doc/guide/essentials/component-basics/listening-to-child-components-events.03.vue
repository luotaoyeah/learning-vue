<template>
  <!------------------------------------------------------------------------------------------------------
      如何让自定义的表单控件支持 v-model 指令：
        1. 定义一个 props 如 modelValue 并绑定到 value 属性，
        2. 监听 input 事件并发出 @update:modelValue 事件，
  ------------------------------------------------------------------------------------------------------->
  <input :value="modelValue" type="text" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script>
// https://v3.vuejs.org/guide/component-basics.html#using-v-model-on-components

export default {
  props: ['modelValue'],
};
</script>

<style lang="less" scoped>
input {
  border-radius: 3px;
  margin-right: 12px;
}
</style>
