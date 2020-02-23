<template>
  <!------------------------------------------------------------------------------------------------------
      对于事件名称，在发出/监听的时候，都最好使用 kebab-case，
  ------------------------------------------------------------------------------------------------------->
  <button @click="$emit('some-event')">CLICK</button>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
button {
  border-radius: 3px;
}
</style>
