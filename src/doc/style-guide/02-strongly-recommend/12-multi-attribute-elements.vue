<template>
  <div>
    <p>
      在模板或者 JSX 中，
      如果一个元素有多个属性，
      应该一个属性一行；
      这样代码更加清晰，容易阅读；
    </p>
    <p>
      <C01
        :foo="'tom'"
        :bar="18"
      ></C01>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {
    C01: {
      template: "<ElButton>click</ElButton>",
      props: ["foo", "bar"]
    }
  }
};
</script>
<style scoped>
</style>
