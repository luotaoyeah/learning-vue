<template>
  <div>
    <ul>
      <li>
        vue 自带一些指令：
        <ul>
          <li>v-model</li>
          <li>v-show</li>
          <li>v-if</li>
          <li>v-else</li>
          <li>v-else-if</li>
          <li>v-for</li>
          <li>v-on</li>
          <li>v-bind</li>
        </ul>
      </li>
      <li>
        vue 允许自定义指令：
        <ul>
          <li>
            使用 Vue.directive() 方法注册全局指令；
            <p>
              <input
                type="text"
                style="padding: 7px;border-radius: 3px;"
                v-red-border
              >
            </p>
          </li>
          <li>
            使用 directives 注册本地指令；
            <p>
              <input
                type="text"
                style="padding: 7px;border-radius: 3px;"
                v-green-border
              >
            </p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";

Vue.directive("redBorder", {
  inserted(el) {
    el.style.borderColor = "#ff0000";
  }
});

export default {
  data() {
    return {};
  },
  directives: {
    greenBorder: {
      inserted(el) {
        el.style.borderColor = "#00ff00";
      }
    }
  },
  components: {}
};
</script>
<style scoped>
</style>
