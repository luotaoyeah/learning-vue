<template>
  <div>
    <ul>
      <li>描述：获取或者注册全局组件；</li>
      <li>
        参数：
        <ul>
          <li>{ string } id</li>
          <li>{ Object | Function } [definition]</li>
        </ul>
      </li>
    </ul>
    <p><component :is="id02"></component></p>
    <p><component :is="id03"></component></p>
    <p><span :id="id01"></span></p>
  </div>
</template>
<script>
import _ from "lodash";
import Vue from "vue";

const id02 = Vue._.uniqueId("C");
const id03 = Vue._.uniqueId("C");

/* 注册全局组件 */
Vue.component(
  id02,
  Vue.extend({
    template: "<ElButton>C01</ElButton>"
  })
);

Vue.component(id03, {
  template: "<ElButton>C02</ElButton>"
});

export default {
  data() {
    const vm = this;
    return {
      id01: _.uniqueId("span_"),
      id02,
      id03
    };
  },
  mounted() {
    const vm = this;

    /*
     * 获取全局组件，
     * 返回的是该组件的构造函数；
     */
    const MyComponent20180427144309 = Vue.component(vm.id02);
    new MyComponent20180427144309().$mount(`#${vm.id01}`);
  },
  components: {}
};
</script>
