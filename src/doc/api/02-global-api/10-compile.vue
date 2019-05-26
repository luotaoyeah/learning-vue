<template>
  <div>
    <ul>
      <li>描述：将字符串模板编译为渲染函数；</li>
      <li>
        参数：
        <ul>
          <li>{ string } template</li>
        </ul>
      </li>
    </ul>
    <span :id="id02"></span>
  </div>
</template>

<script>
import { uniqueId } from "lodash-es";
import Vue from "vue";

const id01 = uniqueId("C");
const id02 = uniqueId("span_");

Vue.component(id01, {
  render: Vue.compile("<ElButton @click='handleClick01'>click me</ElButton>")
    .render,
  methods: {
    handleClick01() {
      alert(`${id01}.handleClick01()`);
    }
  }
});

export default {
  data() {
    return {
      id01,
      id02
    };
  },
  mounted() {
    const vm = this;
    const C01 = Vue.component(id01);
    new C01().$mount(`#${vm.id02}`);
  },
  components: {}
};
</script>
