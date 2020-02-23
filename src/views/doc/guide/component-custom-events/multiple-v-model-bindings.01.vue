<template>
  <input v-model="modelValue01" type="text" />
  <input v-model="name01" type="text" />
  <input v-model="age01" type="number" />
</template>

<script>
export default {
  props: ['modelValue', 'name', 'age'],
  computed: {
    modelValue01: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
    name01: {
      get() {
        return this.name;
      },
      set(value) {
        this.$emit('update:name', value);
      },
    },
    age01: {
      get() {
        return this.age;
      },
      set(value) {
        this.$emit('update:age', value);
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
