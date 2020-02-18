<template>
  <p>
    <span>{{ id }}</span> <span>{{ title }}</span>
  </p>
</template>

<script>
export default {
  props: ['id', 'title'],
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
