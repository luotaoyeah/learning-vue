<template>
  <input :value="value" type="text" @input="onInput" />
</template>

<script>
export default {
  name: 'CustomInput',
  props: ['value'],
  methods: {
    onInput($event) {
      this.$emit('input', $event.target.value);
    },
  },
};
</script>

<style scoped>
input {
  border-color: red;
  border-width: 2px;
  border-radius: 5px;
}
</style>
