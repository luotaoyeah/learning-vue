<template>
  <div>
    <ul>
      <li>使用声明式的方式扩展组件；类似 mixins；</li>
      <li>对应命令式的方式为 Vue.extend()；</li>
    </ul>
    <p><C02 /></p>
  </div>
</template>
<script>
const C01 = {
  created() {
    console.log("C01.created()");
  }
};
export default {
  data() {
    return {};
  },
  components: {
    C02: {
      template: "<ElTag>C02</ElTag>",
      created() {
        console.log("C02.created()");
      },
      extends: C01
    }
  }
};
</script>
