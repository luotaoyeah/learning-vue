<template>
  <div>
    <ul>
      <li>组件的 props 对象；</li>
      <li>
        vm.$props 的属性会被映射到组件实例上， 即如果 vm.$props.x 存在， 则 vm.x
        === vm.$props.x；
        <p><C01 x="tom" /></p>
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
      template:
        "<ElButton @click='handleClick'>vm.x === vm.$props.x</ElButton>",
      props: {
        x: {
          type: String
        }
      },
      methods: {
        handleClick() {
          console.log("vm.x === vm.$props.x:", this.x === this.$props.x);
        }
      }
    }
  }
};
</script>
