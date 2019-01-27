<template>
  <div>
    <ul>
      <li>组件实例初始化完成；</li>
      <li>此时， 数据绑定、事件、监视器尚未初始化；</li>
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
    /* this.$data: undefined */
    console.log("this.$data:", this.$data);
  },
  components: {}
};
</script>
