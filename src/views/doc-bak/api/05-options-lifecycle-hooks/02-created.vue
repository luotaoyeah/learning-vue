<template>
  <div>
    <ul>
      <li>组件实例创建完成；</li>
      <li>
        此时， 所有的组件选项全部处理完成， 但是尚未挂载， 且 vm.$el 尚未处理；
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "tom",
    };
  },
  created() {
    /* this.$data: {"name":"tom"} */
    console.log("this.$data:", JSON.stringify(this.$data));
    /* this.$el:undefined */
    console.log("this.$el:", this.$el);
  },
  components: {},
};
</script>
