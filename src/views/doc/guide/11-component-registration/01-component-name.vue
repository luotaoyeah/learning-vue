<template>
  <div>
    <h1>1. Component Names</h1>
    <h2>1.1</h2>
    <small>
      <ul>
        <li>注册组件时，必须给组件一个名字；</li>
        <li>
          使用 Vue.component() 注册全局组件时， 第一个参数就是组件的名字；
        </li>
        <li>
          如果组件直接在 DOM 里面使用，组件名称应该符合 W3C 的规范：
          <ul>
            <li>全部是小写字母；</li>
            <li>必须包含短横线（连字符）；</li>
          </ul>
        </li>
      </ul>
    </small>
    <h2>1.2.</h2>
    <small>
      <ul>
        <li>
          组件的名称可以有两种格式：
          <ul>
            <li>kebab-case</li>
            <li>PascalCase</li>
          </ul>
        </li>
        <li>使用 kebab-case 定义的组件， 在使用时也必须使用 kebab-case；</li>
        <li>
          使用 PascalCase 定义的组件， 在使用时，可以使用 kebab-case，也可以使用 PascalCase；
        </li>
        <li>在 DOM 模板里面，只能使用 kebab-case；</li>
      </ul>
    </small>
    <!--
        使用 kebab-case 定义的组件，在使用时，不能使用 PascalCase；
        <MyComponentFoo></MyComponentFoo>
    -->
    <my-component-foo></my-component-foo>
    <my-component-bar></my-component-bar>
    <MyComponentBar></MyComponentBar>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("my-component-foo", {
  template: "<p>my-component-foo</p>"
});

Vue.component("MyComponentBar", {
  template: "<p>MyComponentBar</p>"
});

export default {
  data() {
    return {};
  }
};
</script>
