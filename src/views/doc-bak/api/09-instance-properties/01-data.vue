<template>
  <div>
    <ul>
      <li>组件的 data 对象；</li>
      <li>
        vm.$data 的属性会被映射到组件实例上， 即如果 vm.$data.x 存在， 则 vm.x === vm.$data.x；
        <p><C01 /></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    C01: {
      template: "<ElButton @click='handleClick'>vm.x === vm.$data.x</ElButton>",
      data() {
        return { x: "tom" };
      },
      methods: {
        handleClick() {
          console.log("vm.x === vm.$data.x:", this.x === this.$data.x);
        },
      },
    },
  },
};
</script>
