<template>
  <div>
    <h1>9. DOM Template Parsing Caveats</h1>
    <small>
      <ul>
        <li>
          有些 DOM 元素对它们的直接子元素，或者直接父元素有限制；
          即其直接子元素（或者直接父元素）必须是某种元素；
          这导致在使用自定义组件作为其直接子元素时，
          会使最终的渲染结果跟预期的不一致；
        </li>
        <li>解决方法是，使用 is 属性；</li>
        <li>
          使用下面这三种字符串模板的方式，没有这个限制；
          <ul>
            <li>使用 template 配置属性配置字符串模板；</li>
            <li>使用单文件组件（SFC）；</li>
            <li>使用 &lt;script type="text/x-template"&gt;</li>
          </ul>
        </li>
      </ul>
    </small>
    <table>
      <MyTr></MyTr>
      <MyTr></MyTr>
    </table>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("MyTr", {
  template: "<tr><td>FOO</td><td>BAR</td></tr>"
});

export default {
  data() {
    return {};
  }
};
</script>
