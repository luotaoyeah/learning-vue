<template>
  <div>
    <p>
      父子组件之间的交互， 应该使用 props 和 event； 而不要使用 this.$parent
      修改父组件的状态， 或者在子组件中修改 props；
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped></style>
