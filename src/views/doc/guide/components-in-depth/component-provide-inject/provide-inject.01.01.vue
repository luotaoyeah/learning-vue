<template>
  <span>{{ value01 }}</span>
  <span>{{ value02 }}</span>
  <span>{{ value03.value }}</span>
</template>

<script>
export default {
  inject: ['value01', 'value02', 'value03'],
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
