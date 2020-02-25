<template>
  <input v-model="value" type="text" />
</template>

<script>
export default {
  data() {
    return {
      value: '',
    };
  },
};
</script>

<style lang="less" scoped>
input {
  border-radius: 3px;
  margin-right: 12px;
  color: red;
  border-color: red;
}
</style>
