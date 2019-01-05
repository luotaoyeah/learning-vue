<template>
  <div>
    <ul>
      <li>可以使用 Vue.mixin() 注册全局的 mixin；</li>
      <li>在这之后创建的 vue 实例都会被混入这个 mixin， 所以应该小心使用；</li>
      <li>
        通常使用全局的 mixin 来处理自定义的组件选项；
        <p><MyComponent190301></MyComponent190301></p>
        <p><MyComponent190302></MyComponent190302></p>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";

Vue.mixin({
  created() {
    const myOption = this.$options.myOption;
    if (myOption) {
      console.log("myOption:", myOption);
    }
  }
});

Vue.component("MyComponent190301", {
  template: "<el-button>MyComponent190301</el-button>",
  myOption: "hello"
});

Vue.component("MyComponent190302", {
  template: "<el-button>MyComponent190302</el-button>",
  myOption: "hello"
});

export default {
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped></style>
