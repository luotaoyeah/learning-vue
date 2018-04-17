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
          <MyComponent190101></MyComponent190101>
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
      console.log("MyMixin.hello()");
    }
  }
};

Vue.component("MyComponent190101", {
  template: "<el-alert :closable='false' title='my component'></el-alert>",
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
