<template>
  <div>
    <h1>2. Programmatic Event Listeners</h1>
    <small>
      <ul>
        <li>
          vue 提供了 3 个跟事件相关的实例方法：
          <ul>
            <li>$on: 添加事件监听；</li>
            <li>$once: 添加单次事件监听；</li>
            <li>$off: 移除事件监听；</li>
          </ul>
        </li>
        <li>
          一般情况下，我们不需要用到这 3 个方法；
          <MyComponent ref="myComponentRef01"></MyComponent>
        </li>
        <li>
          使用 $on 监听子组件的事件，需要用子组件的实例对象来调用 $on 方法；
          即
          <i>'监听谁的事件，就由谁来调用 $on 方法'</i>
          ；
        </li>
      </ul>
    </small>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("MyComponent", {
  template: `
<div>
  <button @click="$emit('click-me')">click me</button>
  <ul>
    <li
      v-for="(message, messageIndex) in messages"
      :key="'message_' + messageIndex"
    >{{message}}</li>
  </ul>
</div>`,
  data() {
    return {
      messages: []
    };
  },
  beforeCreate() {
    const vm = this;
    vm.$once("hook:created", () => {
      vm.messages.push("created");
    });
    vm.$once("hook:beforeMount", () => {
      vm.messages.push("beforeMount");
    });
    vm.$once("hook:mounted", () => {
      vm.messages.push("mounted");
    });
    vm.$once("hook:beforeUpdate", () => {
      vm.messages.push("beforeUpdate");
    });
    vm.$once("hook:updated", () => {
      vm.messages.push("updated");
    });
    vm.$once("hook:beforeDestroy", () => {
      vm.messages.push("beforeDestroy");
    });
    vm.$once("hook:destroyed", () => {
      vm.messages.push("destroyed");
    });
  }
});

export default {
  data() {
    return {};
  },
  mounted() {
    const vm = this;
    vm.$refs.myComponentRef01.$on("click-me", () => {
      alert("click-me on MyComopnent");
    });
  }
};
</script>
<style scoped>
</style>
