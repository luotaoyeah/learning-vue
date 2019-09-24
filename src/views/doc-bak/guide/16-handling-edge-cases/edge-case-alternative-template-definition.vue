<template>
  <div>
    <h1>4. Alternate Template Definitions</h1>
    <h2>4.1. Inline Templates</h2>
    <small>
      <ul>
        <li>
          如果在组件元素上声明 inline-template 属性， 表示将组件元素之间的内容作为组件的模板， 而不是作为分发内容；
          <MyComponent01>
            <p><i>body</i></p>
          </MyComponent01>
          <MyComponent01 inline-template>
            <p><i>body</i></p>
          </MyComponent01>
        </li>
      </ul>
    </small>
    <h2>4.2. X-Templates</h2>
    <small>
      <ul>
        <li>
          可以使用 script 元素声明模板；
          <ul>
            <li>设置 script 元素的 type 属性：type="text/x-template"；</li>
            <li>
              设置 script 元素的 id 属性，然后在组建中通过这个 id 引用模板；
            </li>
          </ul>
          <MyComponent02></MyComponent02>
        </li>
        <li>这种方式将组件和模板分隔开来，应该避免使用这种方式；</li>
      </ul>
    </small>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("MyComponent01", {
  template: `
    <div
      style="border: 1px solid #dddddd;padding: 5px;border-radius: 3px;"
    >
      <p>header</p>
      <slot></slot>
      <p>footer</p>
    </div>
`,
});

Vue.component("MyComponent02", {
  template: "#edge-case-alternative-template-definition-my-component-02",
});

export default {
  data() {
    return {};
  },
};
</script>
