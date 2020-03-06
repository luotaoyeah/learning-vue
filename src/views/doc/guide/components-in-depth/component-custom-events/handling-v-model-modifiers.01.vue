<template>
  <input v-model="modelValue01" type="text" />
  <input v-model="name01" type="text" />
</template>

<script>
import { upperFirst } from 'lodash-es';

/*----------------------------------------------------------------------------------------------------
 * 对于默认属性 modelValue，可以声明一个 modelModifiers 属性，里面包含了无参数的 v-model 上所有的 modifier，
 * 对于自定义的属性如 xxxxx，可以声明一个 xxxxxModifiers 属性，里面包含了该 v-model 上所有的 modifier，
 *----------------------------------------------------------------------------------------------------*/
export default {
  props: ['modelValue', 'name', 'modelModifiers', 'nameModifiers'],
  computed: {
    modelValue01: {
      get() {
        return this.modelValue;
      },
      set(value) {
        if (this.modelModifiers.upperFirst) {
          this.$emit('update:modelValue', upperFirst(value));
        } else {
          this.$emit('update:modelValue', value);
        }
      },
    },
    name01: {
      get() {
        return this.name;
      },
      set(value) {
        if (this.nameModifiers.upperFirst) {
          this.$emit('update:name', upperFirst(value));
        } else {
          this.$emit('update:name', value);
        }
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
