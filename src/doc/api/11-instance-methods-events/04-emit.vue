<template>
  <div>
    <ul>
      <li>在当前组件实例中触发一个事件；</li>
      <li>
        额外的参数会传递给事件回调函数；
        <p><C01 @foo-click="handleFooClick" /></p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleFooClick(name, age) {
      console.log("foo-click:", name, age);
    }
  },
  components: {
    C01: {
      template: "<ElButton @click='handleClick'>vm.$emit</ElButton>",
      methods: {
        handleClick() {
          const vm = this;
          vm.$emit("foo-click", "tom", 18);
        }
      }
    }
  }
};
</script>
