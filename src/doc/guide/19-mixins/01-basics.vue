<template>
  <div>
    <ul>
      <li>
        mixin 对象可以包含任意的组件选项；
      </li>
      <li>
        当组件使用 mixin 时，
        mixin 的选项会被混入组件自己的选项；
        <p>
          <MyComponent></MyComponent>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";

const MyMixin = {
  created() {
    this.hello();
  },
  methods: {
    hello() {
      alert("MyMixin.hello()");
    }
  }
};

Vue.component("MyComponent", {
  template: "<el-alert :closable='false'>my component</el-alert>",
  mixins: [MyMixin]
});

export default {
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped>
</style>
