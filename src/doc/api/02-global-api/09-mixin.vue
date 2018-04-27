<template>
  <div>
    <ul>
      <li>
        描述：全局应用一个 mixin；
        <p>
          <small>
            一般不在应用中直接使用，
            而是在插件中使用，
            用来往组件注入一些自定义行为；
          </small>
        </p>
      </li>
      <li>
        参数：
        <ul>
          <li>{ Object } mixin</li>
        </ul>
      </li>
    </ul>
    <p>
      <C20180427153537/>
    </p>
  </div>
</template>
<script>
import Vue from "vue";

const f01 = Vue._.once(() => {
  console.log("MyPlugin.mounted()");
});

Vue.use((Vue, options) => {
  Vue.mixin({
    mounted() {
      f01();
    }
  });
});

Vue.component("C20180427153537", {
  template: "<ElButton>C01</ElButton>"
});

export default {
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped>
</style>
