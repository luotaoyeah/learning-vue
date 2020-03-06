<template>
  <div>
    <ul>
      <li>描述：获取或者注册一个全局指令；</li>
      <li>
        参数：
        <ul>
          <li>{ string } id</li>
          <li>{ Function | Object } [definition]</li>
        </ul>
      </li>
    </ul>
    <p>
      <input
        type="text"
        style="border-radius: 3px;padding: 7px;"
        v-directive-20180427="'#ff00ff'"
      />
    </p>
  </div>
</template>

<script>
import Vue from "vue";

/* 注册全局指令 */
Vue.directive("directive-20180427", {
  bind(el, binding, vnode) {
    el.style.borderColor = binding.value;
  },
  inserted() {},
  update() {},
  componentUpdated() {},
  unbind() {}
});

export default {
  data() {
    return {};
  },
  created() {
    /* 获取全局指令 */
    console.log("directive-20180427", Vue.directive("directive-20180427"));
  },
  components: {}
};
</script>
