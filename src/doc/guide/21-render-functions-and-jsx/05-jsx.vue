<template>
  <div>
    <ul>
      <li>
        比起直接使用渲染函数，
        JSX 让代码显得更加简洁；
      </li>
      <li>
        需要使用插件：babel-plugin-transform-vue-jsx，
        使用 vue-cli + webpack 搭建的项目已经默认启用了对 JSX 的支持；
        <p>
          <MyComponent120501></MyComponent120501>
        </p>
      </li>
      <li>
        根据惯例，
        在 render 方法中使用 JSX 时，
        第一个参数（createElement）一般使用别名 h；
      </li>
    </ul>
  </div>

</template>
<script type="text/babel">
import Vue from "vue";
import { Button as ElButton } from "element-ui";

Vue.component("MyComponent120501", {
  render(h) {
    return (
      <ElButton
        onClick={() => {
          alert("MyComponent120501.click()");
        }}
      >
        click me
      </ElButton>
    );
  }
});

export default {
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped>
</style>
