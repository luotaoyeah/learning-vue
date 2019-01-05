<template>
  <div>
    <h1>5. Controlling Updates</h1>
    <small>
      <ul>
        <li>一般情况下，vue 知道应该什么时候更新组件；</li>
        <li>
          同时 vue 提供了相应的机制，
          <ul>
            <li>可以在数据未改变的情况下，强制手动更新；</li>
            <li>可以阻止不必要的自动更新；</li>
          </ul>
        </li>
      </ul>
    </small>
    <h2>5.1. Forcing an Update</h2>
    <small>
      <ul>
        <li>
          当发现需要强制更新时，首先检查是否代码写错了，包括：
          <ul>
            <li>使用了不能被 vue 检测到的数组操作或对象操作；</li>
            <li>依赖了未实现双向绑定的数据；</li>
          </ul>
        </li>
        <li>如果要执行强制更新，可以使用 vm.$forceUpdate() 实例方法；</li>
      </ul>
    </small>
    <h2>5.2. Cheap Static Components with v-once</h2>
    <small>
      <ul>
        <li>
          如果某个组件只包含了静态内容， 可以在组件的根元素上添加属性 v-once，
          表示这个组件只会被渲染一次， 然后被缓存起来；
          <MyComponent11></MyComponent11>
          <MyComponent12></MyComponent12>
        </li>
      </ul>
    </small>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("MyComponent11", {
  template: `
    <div>
      <input style="border-radius: 3px;padding: 7px;" v-model="message">
    </div>
`,
  data() {
    return { message: "" };
  },
  updated() {
    console.log("11 updated");
  }
});

Vue.component("MyComponent12", {
  template: `
    <div v-once>
      <input style="border-radius: 3px;padding: 7px;" v-model="message">
    </div>
`,
  data() {
    return { message: "" };
  },
  updated() {
    console.log("12 updated ~~~~~~~~~~");
  }
});

export default {
  data() {
    return {};
  }
};
</script>
<style scoped></style>
