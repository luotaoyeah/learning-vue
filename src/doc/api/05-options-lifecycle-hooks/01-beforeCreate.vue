<template>
  <div>
    <ul>
      <li>
        组件实例初始化之后立即触发，
        此时，
        数据绑定、事件、监视器尚未初始化；
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "tom"
    };
  },
  beforeCreate() {
    /* undefined */
    console.log(this.$data);
  },
  components: {}
};
</script>
<style scoped>
</style>
