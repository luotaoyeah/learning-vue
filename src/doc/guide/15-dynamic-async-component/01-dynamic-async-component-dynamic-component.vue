<template>
  <div>
    <ul>
      <li>
        vue 支持动态组件，使用 component 元素以及 is 属性，
        动态切换组件；
        <ul>
          <li>
            &lt;component :is="currentComponent"&gt;&lt;/component&gt;
          </li>
        </ul>
      </li>
      <li>
        默认情况下，每次切换组件时，
        都会重新创建组件实例；
      </li>
      <li>
        如果要保留组件实例及状态，可以将动态组件放到 keep-alive 元素中间；
      </li>
    </ul>
    <button @click="currentComponent01 = 'TabA'">a</button>
    <button @click="currentComponent01 = 'TabB'">b</button>
    <component :is="currentComponent01"></component>
    <div>
      <button @click="currentComponent02 = 'TabA'">a</button>
      <button @click="currentComponent02 = 'TabB'">b</button>
      <keep-alive>
        <component :is="currentComponent02"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("TabA", {
  template: `
    <div>
      tab-a:
      <input type="text" style="border-radius: 3px;padding: 7px;">
    </div>`,
  created() {
    console.log("TabA created");
  }
});

Vue.component("TabB", {
  template: `
    <div>
      tab-b:
      <input type="text" style="border-radius: 3px;padding: 7px;">
    </div>`,
  created() {
    console.log("TabB created");
  }
});

export default {
  data() {
    return {
      currentComponent01: "TabA",
      currentComponent02: "TabA"
    };
  }
};
</script>
<style scoped>
</style>
