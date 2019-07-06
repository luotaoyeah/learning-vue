<template>
  <div>
    <h1>3. Circular References</h1>
    <h2>3.1. Recursive Components</h2>
    <small>
      <ul>
        <li>
          在组件模板中可以使用组件本身，此时组件必须声明 name 属性；
          <img :src="P01" />
        </li>
        <li>循环使用组件时，应该加上条件控制，否则会造成栈溢出；</li>
      </ul>
    </small>
    <h2>3.2. Circular References between Components</h2>
    <small>
      <ul>
        <li>
          假如有两个组件 A 和 B，其中 A 依赖了 B，B 又依赖了 A，就会造成循环依赖；
        </li>
        <li>
          如果这两个组件是使用 Vue.component() 方法注册的，那么 vue 会自动帮我们解决这个问题；
          <A01 :folder="folder"></A01>
        </li>
        <li>如果这两个组件是通过模块引入的，那么会报错；</li>
        <li>
          此时可以使用 webpack 的异步 import 机制：
          <ul>
            <li>components: { B: () => import("./A.vue") }</li>
          </ul>
          <A02 :folder="folder"></A02>
        </li>
      </ul>
    </small>
  </div>
</template>

<script>
import Vue from "vue";
import P01 from "./edge-case-circular-reference-01.png";
import A02 from "./edge-case-circular-reference-a-02";

Vue.component("A01", {
  name: "a01",
  template: `
    <p>
      <span>{{folder.name}}</span>
      <B01 :children="folder.children"></B01>
    </p>`,
  props: ["folder"]
});

Vue.component("B01", {
  name: "b01",
  template: `
    <ul>
      <li
        v-for="(child, childIndex) in children"
        :key="'child_' + childIndex"
      >
      <A01
        v-if="child.children"
        :folder="child"
      ></A01>
      <span v-else>{{child.name}}</span>
      </li>
    </ul>`,
  props: ["children"]
});

export default {
  data() {
    return {
      P01,
      folder: {
        name: "1",
        children: [
          {
            name: "1.1",
            children: [
              {
                name: "1.1.1",
                children: [
                  {
                    name: "1.1.1.1"
                  }
                ]
              }
            ]
          },
          {
            name: "1.2"
          }
        ]
      }
    };
  },
  components: { A02 }
};
</script>
