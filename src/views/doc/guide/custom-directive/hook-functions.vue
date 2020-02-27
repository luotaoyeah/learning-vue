<template>
  <button @click="visible = !visible">toggle</button>
  <input v-if="visible" v-model="value01" v-border-radius type="text" />
</template>

<script>
// https://v3.vuejs.org/guide/custom-directive.html#hook-functions

export default {
  data() {
    return {
      value01: '',
      visible: true,
    };
  },
  directives: {
    /*----------------------------------------------------------------------------------------------------
     * directive 有 6 个钩子函数，
     *----------------------------------------------------------------------------------------------------*/
    'border-radius': {
      beforeMount(el) {
        console.log('beforeMount');
      },
      mounted(el) {
        console.log('mounted');
      },
      beforeUpdate(el) {
        console.log('beforeUpdate');
      },
      updated(el) {
        console.log('updated');
      },
      beforeUnmount(el) {
        console.log('beforeUnmount');
      },
      unmounted(el) {
        console.log('unmounted');
      },
    },
  },
};
</script>

<style lang="less" scoped>
button,
input {
  border-radius: 3px;
  margin-right: 12px;
}
</style>
