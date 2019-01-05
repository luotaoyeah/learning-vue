<template>
  <div>
    <ul>
      <li>该指令会一直在元素上， 直到 vue 实例编译完成；</li>
      <li>
        跟 css 一起使用， 可以用来隐藏尚未编译的 mustache binding；
        <p>点击 load 按钮才加载组件；</p>
        <ul>
          <li>
            未使用 v-cloak，页面会显示尚未编译的内容；
            <p>
              <ElButton @click="handleClick01">load</ElButton>
              <span id="span_20180502215302" v-pre>
                <ElButton>{{ name }}</ElButton>
              </span>
            </p>
          </li>
          <li>
            使用了 v-cloak，页面不会显示未编译的内容，直到组件实例编译完成；
            <p>
              <ElButton @click="handleClick02">load</ElButton>
              <span id="span_20180502215303" v-pre>
                <ElButton v-cloak>{{ name }}</ElButton>
              </span>
            </p>
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
  data() {
    return { name: "tom" };
  }
});
export default {
  data() {
    return { id01 };
  },
  methods: {
    handleClick01() {
      const c01 = new C01();
      c01.$mount("#span_20180502215302");
    },
    handleClick02() {
      const c01 = new C01();
      c01.$mount("#span_20180502215303");
    }
  },
  components: {}
};
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>
