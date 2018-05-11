<template>
  <div>
    <ul>
      <li>
        挂载组件；
      </li>
      <li>
        如果实例化组件的时候没有指定 el 选项，
        则需要手动调用 vm.$mount() 方法将组件挂载到 DOM 上；
        <p>
          <span :id="id01"/>
          <span :id="id02"/>
        </p>
      </li>
      <li>
        如果 vm.$mount() 没有指定参数，
        那么组件编译之后不会挂载，
        需要手动将编译好的 DOM 对象挂载到 DOM 上；
        <p>
          <span :id="id03"/>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";

const id01 = Vue._.uniqueId("span_");
const id02 = Vue._.uniqueId("span_");
const id03 = Vue._.uniqueId("span_");
const id04 = Vue._.uniqueId("span_");

const C01 = Vue.extend({
  template: "<ElButton>C01</ElButton>"
});

const C02 = Vue.extend({
  template: "<ElButton>C02</ElButton>"
});

const C03 = Vue.extend({
  template: "<ElButton>C03</ElButton>"
});

export default {
  data() {
    return {
      id01,
      id02,
      id03,
      id04
    };
  },
  mounted() {
    const vm = this;

    const c01 = new C01({
      el: `#${id01}`
    });

    const c02 = new C02();
    c02.$mount(`#${id02}`);

    document.getElementById(id03).appendChild(new C03().$mount().$el);
  },
  components: {}
};
</script>
<style scoped>
</style>
