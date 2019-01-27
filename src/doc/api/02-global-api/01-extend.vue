<template>
  <div>
    <ul>
      <li>描述：创建一个 vue 构造函数的子类；</li>
      <li>
        参数：
        <ul>
          <li>{ Object } options：组件选项对象；</li>
        </ul>
      </li>
    </ul>
    <p><span id="span_01"></span></p>
  </div>
</template>
<script>
import Vue from "vue";

const MyButton01 = Vue.extend({
  template: `
    <ElButton @click="handleClick01">{{message}}</ElButton>`,
  data() {
    return { message: "click me" };
  },
  methods: {
    handleClick01() {
      alert("MyButton01.handleClick01()");
    }
  }
});

const MyButton02 = MyButton01.extend({
  mounted() {
    console.log("MyButton02.mounted()");
  }
});

export default {
  data() {
    return {};
  },
  mounted() {
    new MyButton02().$mount("#span_01");
  },
  components: {}
};
</script>
