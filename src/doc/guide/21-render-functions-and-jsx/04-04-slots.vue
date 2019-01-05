<template>
  <div>
    <h2>Slots</h2>
    <ul>
      <li>
        可以通过 this.$slots 来访问和定义 slots；
        <MyComponent210405>
          <span slot="header">head</span> content
          <span slot="footer">foot</span>
        </MyComponent210405>
      </li>
      <li>
        可以通过 this.$scopedSlots 来访问和定义 scoped slots；
        <MyComponent210406 :title="'i am title.'" :message="'hello.'">
          <span slot="header" slot-scope="{ title }">{{ title }} </span>
          <span slot="content" slot-scope="{ message }">{{ message }} </span>
          <span>foot.</span>
        </MyComponent210406>
      </li>
      <li>
        可以通过属性对象的 scopedSlots 属性， 将 scoped slots 的 scope 对象，
        传递到子组件的 slots 中去；
        <MyComponent210408> </MyComponent210408>
      </li>
      <li>
        this.$scopedSlots 和属性对象的 scopedSlots 的区别：
        <ul>
          <li>this.$scopedSlots ： 用来定义 scoped slots；</li>
          <li>scopedSlots ： 用来使用 scoped slots；</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("MyComponent210405", {
  render(h) {
    const vm = this;
    return h("p", [this.$slots.header, vm.$slots.default, this.$slots.footer]);
  }
});

Vue.component("MyComponent210406", {
  props: ["title", "message"],
  render(h) {
    const vm = this;
    return h("p", [
      vm.$scopedSlots.header({
        title: vm.title
      }),
      vm.$scopedSlots.content({
        message: vm.message
      }),
      this.$slots.default
    ]);
  }
});

Vue.component("MyComponent210407", {
  render(h) {
    const vm = this;
    return h("p", [
      "child head.",
      vm.$scopedSlots.default({
        message: "child message."
      }),
      "child foot."
    ]);
  }
});

Vue.component("MyComponent210408", {
  render(h) {
    const vm = this;
    return h("p", [
      "parent head.",
      h("MyComponent210407", {
        scopedSlots: {
          default(props) {
            return h("span", [props.message]);
          }
        }
      }),
      "parent foot."
    ]);
  }
});

export default {
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped></style>
