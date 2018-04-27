<template>
  <div>
    <p>
      <MyComponent20180427144309/>
    </p>
    <p>
      <MyComponent20180427144310/>
    </p>
    <p>
      <span :id="id01"></span>
    </p>
  </div>
</template>
<script>
import Vue from "vue";

/* 注册全局组件 */
Vue.component(
  "MyComponent20180427144309",
  Vue.extend({
    template: "<ElButton>MyComponent20180427144309</ElButton>"
  })
);

Vue.component("MyComponent20180427144310", {
  template: "<ElButton>MyComponent20180427144310</ElButton>"
});

export default {
  data() {
    return {
      id01: this._.uniqueId("span_")
    };
  },
  mounted() {
    const vm = this;

    /*
     * 获取全局组件，
     * 返回的是该组件的构造函数；
     */
    const MyComponent20180427144309 = Vue.component(
      "MyComponent20180427144309"
    );
    new MyComponent20180427144309().$mount(`#${vm.id01}`);
  },
  components: {}
};
</script>
<style scoped>
</style>
