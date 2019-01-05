<template>
  <div>
    <h1>1. Slot Content</h1>
    <small>
      <ul>
        <li>
          vue 按照 web 组件规范草案实现了一个内容分发的 API， 使用 slot
          元素作为内容分发的出口；
        </li>
        <li>
          在组件的模板中声明一个 &lt;slot&gt;&lt;/slot&gt;，
          然后就可以在组件元素之间插入任意内容，包括：
          <ul>
            <li>文本；</li>
            <li>HTML；</li>
            <li>组件；</li>
          </ul>
          这些内容会替换掉组件模板中的 slot 元素， 出现在最终的渲染结果中；
        </li>
        <li>
          如果组件模板中没有声明 slot 元素，
          那么组件元素之间的任何内容都会被直接忽略；
        </li>
      </ul>
    </small>
    <MyComponent01>
      <small> <i>组件元素之间的内容；</i> </small>
    </MyComponent01>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("MyComponent01", {
  template: `
<div>
    <p>header</p>
    <slot></slot>
    <p>footer</p>
</div>
  `
});

export default {
  data() {
    return {};
  }
};
</script>
<style scoped></style>
