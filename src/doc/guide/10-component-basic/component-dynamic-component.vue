<template>
  <div>
    <h1>8. Dynamic Components</h1>
    <small>
      <ul>
        <li>
          vue 提供了自定义元素 component，通过 is 属性，
          动态切换组件；
        </li>
        <li>
          is 属性绑定的可以是组件的名称，
          也可以是组件的 options 对象；
        </li>
      </ul>
    </small>
    <p>
      <button
        v-for="tab in tabs"
        :key="tab"
        v-on:click="currentTab = tab"
        :style="{color: currentTab === tab ? 'blue' : ''}"
      >{{tab}}
      </button>
    </p>
    <component v-bind:is="currentComponent" :name="currentComponent"></component>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("tab-a", {
  template: "<p>component name: {{name}}</p>",
  props: ["name"],
  created() {
    console.log("tab-a created");
  }
});

Vue.component("tab-b", {
  template: "<p>component name: {{name}}</p>",
  props: ["name"],
  created() {
    console.log("tab-b created");
  }
});

export default {
  data() {
    return {
      tabs: ["a", "b"],
      currentTab: "a"
    };
  },
  computed: {
    currentComponent() {
      return `tab-${this.currentTab}`;
    }
  }
};
</script>
<style scoped>
</style>
