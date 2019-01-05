<template>
  <div>
    <ul>
      <li>
        vue 支持将组件定义为工厂方法，
        在真正需要渲染组件的时候，才通过工厂方法获取组件，
      </li>
      <li>并且会缓存起来，避免重复加载；</li>
    </ul>
    <div>
      <button @click="currentComponent01 = 'SyncComponent'">sync</button>
      <button @click="currentComponent01 = 'AsyncComponent01'">async</button>
      <component :is="currentComponent01"></component>
    </div>
    <ul>
      <li>
        工厂方法可以不使用 vue 提供的 resolve 回调， 而是直接返回一个 Promise；
      </li>
    </ul>
    <div>
      <button @click="currentComponent02 = 'SyncComponent'">sync</button>
      <button @click="currentComponent02 = 'AsyncComponent02'">async</button>
      <component :is="currentComponent02"></component>
    </div>
    <h2>2.1. Handling Loading State</h2>
    <div>
      <button @click="currentComponent03 = 'SyncComponent'">sync</button>
      <button @click="currentComponent03 = 'AsyncComponent03'">async</button>
      <component :is="currentComponent03"></component>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("SyncComponent", {
  template: "<div>sync</div>"
});

Vue.component("AsyncComponent01", (resolve, reject) => {
  setTimeout(() => {
    resolve({
      template: "<div>async</div>"
    });
  }, 1000);
});

Vue.component("AsyncComponent02", () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        template: "<div>async</div>"
      });
    }, 1000);
  });
});

const LoadingComponent = Vue.component("LoadingComponent", {
  template: "<div>loading...</div>"
});

const ErrorComponent = Vue.component("ErrorComponent", {
  template: "<div>error</div>"
});

Vue.component("AsyncComponent03", () => ({
  component: new Promise(resolve => {
    setTimeout(() => {
      resolve({
        template: "<div>async</div>"
      });
    }, 1000);
  }),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 0,
  timeout: 2000
}));

export default {
  data() {
    return {
      currentComponent01: "SyncComponent",
      currentComponent02: "SyncComponent",
      currentComponent03: "SyncComponent"
    };
  }
};
</script>
<style scoped></style>
