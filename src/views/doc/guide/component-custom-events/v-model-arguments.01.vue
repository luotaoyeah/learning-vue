<template>
  <input v-model="value" type="text" />
</template>

<script>
export default {
  props: ['title'],
  computed: {
    value: {
      get() {
        return this.title;
      },
      set(value) {
        this.$emit('update:title', value);
      },
    },
  },
};
</script>

<style lang="less" scoped>
input {
  border-radius: 3px;
  margin-right: 12px;
}
</style>
