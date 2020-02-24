<template>
  <button>
    <!------------------------------------------------------------------------------------------------------
        <slot> 中间的内容称为 fallback content 或者 default content，
        当没有东西插入到这个 slot 中时，就会使用 fallback content，否则就使用插入的内容，
    ------------------------------------------------------------------------------------------------------->
    <slot>666</slot>
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
