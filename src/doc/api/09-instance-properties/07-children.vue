<template>
  <div>
    <ul>
      <li>直接子组件实例数组；</li>
      <li>不能保证子组件的顺序；</li>
      <li>inreactive 的， 不能用于数据绑定；</li>
    </ul>
    <p><C01 /></p>
    <p><ElButton @click="handleClick">vm.$children</ElButton></p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleClick() {
      console.log(this.$children);
    }
  },
  components: {
    C01: {
      template: "<p class='C01'><C02/></p>",
      components: {
        C02: {
          template: "<ElTag>C02</ElTag>"
        }
      }
    }
  }
};
</script>
