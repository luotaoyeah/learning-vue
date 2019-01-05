<template>
  <div>
    <ul>
      <li>
        销毁组件实例，解绑指令，移除事件监听；
        <p>
          <ElButton @click="handleClick">vm.$destroy</ElButton>
          <C01 ref="refC01" />
        </p>
      </li>
      <li>触发 beforeDestroy 和 destroyed 函数；</li>
      <li>不会移除 DOM 元素；</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$refs.refC01.$destroy();
    }
  },
  components: {
    C01: {
      template: "<ElButton @click='handleClick'>C01</ElButton>",
      beforeDestroy() {
        console.log("C01.beforeDestroy()");
      },
      destroyed() {
        console.log("C01.destroyed()");
      },
      methods: {
        handleClick() {
          this.$alert("C01", "C01", {
            showClose: false
          });
        }
      }
    }
  }
};
</script>
<style scoped></style>
