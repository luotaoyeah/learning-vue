<template>
  <div>
    <ul>
      <li>组件挂载之前；</li>
      <li>即将挂载， 即将第一次调用 render 函数；</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  beforeMount() {
    /* this.$el: undefined */
    console.log("this.$el:", this.$el);
  },
  components: {}
};
</script>
<style scoped></style>
