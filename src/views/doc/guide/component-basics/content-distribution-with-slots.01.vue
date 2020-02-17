<template>
  <button>
    <!------------------------------------------------------------------------------------------------------
        使用 <slot> 实现内容分发，
    ------------------------------------------------------------------------------------------------------->
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
button {
  border-radius: 3px;
  margin-right: 12px;
}
</style>
