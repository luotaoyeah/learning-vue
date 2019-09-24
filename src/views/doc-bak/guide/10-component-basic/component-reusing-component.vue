<template>
  <div>
    <h1>2. Reusing Components</h1>
    <small>
      <ul>
        <li>组件可以重用多次；</li>
        <li>每一个重用都会创建自己独立的 vue 实例；</li>
      </ul>
    </small>
    <ButtonCounter></ButtonCounter>
    <ButtonCounter></ButtonCounter>
    <ButtonCounter></ButtonCounter>
    <small>
      <ul>
        <li>
          组件的 data 属性，不能直接绑定一个对象，必须通过函数返回一个对象； 否则所有的组件实例都会共享这一个 data
          属性， 任何一个实例对 data 的修改都会影响所有其他的实例；
        </li>
      </ul>
    </small>
    <ButtonCounter2></ButtonCounter2>
    <ButtonCounter2></ButtonCounter2>
    <ButtonCounter2></ButtonCounter2>
  </div>
</template>

<script>
/* eslint-disable vue/no-shared-component-data */
import Vue from "vue";

Vue.component("ButtonCounter", {
  template: '<button v-on:click="count++">You clicked {{count}} times.</button>',
  data() {
    return {
      count: 0,
    };
  },
});

const dataObj = {
  count: 0,
};

Vue.component("ButtonCounter2", {
  template: '<button v-on:click="count++">You clicked {{count}} times.</button>',
  data() {
    return dataObj;
  },
});

export default {
  data() {
    return {};
  },
};
</script>
