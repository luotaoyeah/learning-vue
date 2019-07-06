<template>
  <div>
    <ul>
      <li>
        keep-alive 组件取消激活；
        <p>
          <ElButton @click="currentComponent = 'C01'">C01</ElButton>
          <ElButton @click="currentComponent = 'C02'">C02</ElButton>
        </p>
        <p>
          <keep-alive> <component :is="currentComponent" /> </keep-alive>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentComponent: "C01"
    };
  },
  components: {
    C01: {
      template: "<ElTag>C01</ElTag>",
      deactivated() {
        this.$alert("C01.deactivated()", "deactivated", {
          showClose: false
        });
      }
    },
    C02: {
      template: "<ElTag>C02</ElTag>",
      deactivated() {
        this.$alert("C02.deactivated()", "deactivated", {
          showClose: false
        });
      }
    }
  }
};
</script>
