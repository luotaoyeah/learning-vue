<template>
  <div>
    <ul>
      <li>
        指定组件的父组件；
      </li>
      <li>
        父组件的 vm.$children 中将包含组件；
      </li>
      <li>
        组件的 vm.$parent 将指向父组件；
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped>
</style>
