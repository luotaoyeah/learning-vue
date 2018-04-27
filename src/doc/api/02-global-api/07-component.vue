<template>
  <div>
    <p>
      <MyComponent20180427144309/>
    </p>
    <p>
      <MyComponent20180427144310/>
    </p>
    <p>
      <span id="span_02"></span>
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
    return {};
  },
  mounted() {
    /*
     * 获取全局组件，
     * 返回的是该组件的构造函数；
     */
    const MyComponent20180427144309 = Vue.component(
      "MyComponent20180427144309"
    );
    console.log(new MyComponent20180427144309().$mount("#span_02"));
  },
  components: {}
};
</script>
<style scoped>
</style>
