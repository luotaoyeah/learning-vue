<template>
  <input v-model="value" type="text" />
</template>

<script>
export default {
  props: ['modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
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
