<template>
  <input v-model="value" />
</template>

<script>
// https://v3.vuejs.org/guide/component-basics.html#using-v-model-on-components

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
