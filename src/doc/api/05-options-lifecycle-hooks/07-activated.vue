<template>
  <div>
    <ul>
      <li>
        keep-alive 组件激活；
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
      activated() {
        this.$alert("C01.activated()", "activated", {
          showClose: false
        });
      }
    },
    C02: {
      template: "<ElTag>C02</ElTag>",
      activated() {
        this.$alert("C02.activated()", "activated", {
          showClose: false
        });
      }
    }
  }
};
</script>
<style scoped></style>
