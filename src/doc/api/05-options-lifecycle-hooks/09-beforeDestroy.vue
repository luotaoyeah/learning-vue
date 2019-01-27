<template>
  <div>
    <ul>
      <li>
        组件实例销毁之前；
        <p>
          <ElButton @click="currentComponent = 'C01'">C01</ElButton>
          <ElButton @click="currentComponent = 'C02'">C02</ElButton>
        </p>
        <p><component :is="currentComponent" /></p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return { currentComponent: "C01" };
  },
  components: {
    C01: {
      template: "<ElTag>C01</ElTag>",
      beforeDestroy() {
        this.$alert("C01.beforeDestroy()", "beforeDestroy", {
          showClose: false
        });
      }
    },
    C02: {
      template: "<ElTag>C02</ElTag>",
      beforeDestroy() {
        this.$alert("C02.beforeDestroy()", "beforeDestroy", {
          showClose: false
        });
      }
    }
  }
};
</script>
