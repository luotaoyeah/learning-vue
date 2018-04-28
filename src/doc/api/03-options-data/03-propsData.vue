<template>
  <div>
    <ul>
      <li>类型：{ [key: string]: any }</li>
      <li>
        描述：创建组件实例时，设置 props 属性值；
        只有在使用 new 创建组件实例的时候有效；
        <p>
          <small>
            这个属性主要是用来进行单元测试；
          </small>
        </p>
        <ul>
          <li>
            <span :id="id01"></span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";

const id01 = Vue._.uniqueId("span_");

const C01 = Vue.extend({
  template: '<ElButton @click="handleClick01">click me</ElButton>',
  props: ["message"],
  methods: {
    handleClick01() {
      const vm = this;
      vm.$alert(vm.message, "vm.message", {
        showClose: false
      });
    }
  }
});

export default {
  data() {
    return { id01 };
  },
  mounted() {
    const vm = this;
    const c01 = new C01({
      propsData: {
        message: "hello"
      }
    });
    c01.$mount(`#${vm.id01}`);
  },
  components: {}
};
</script>
<style scoped>
</style>
