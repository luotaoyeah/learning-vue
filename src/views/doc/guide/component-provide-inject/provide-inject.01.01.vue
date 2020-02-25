<template>
  <span>
    {{ value01 }}
  </span>
</template>

<script>
export default {
  inject: ['value01'],
};
</script>

<style lang="less" scoped>
span {
  border: 1px solid red;
  border-radius: 3px;
  padding: 4px 8px;
  margin-right: 12px;
}
</style>
