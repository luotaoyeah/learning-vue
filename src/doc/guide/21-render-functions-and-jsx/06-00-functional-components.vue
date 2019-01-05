<template>
  <div>
    <ul>
      <li>
        如果一个组件无须维护状态， 没有生命周期函数， 只是声明了 props，
        我们可以把这个组件声明为 functional 组件；
      </li>
      <li>函数组件是无状态的， 且不会创建组件实例；</li>
      <li>通过设置组件选项 functional: true 来将一个组件标识为函数组件；</li>
      <li>
        函数组件的 render 方法接收第 2 个参数：context，
        作为没有组件实例的补充；
        <p><MyComponent210601 :level="2">h2</MyComponent210601></p>
        <p><MyComponent210601 :level="3">h3</MyComponent210601></p>
      </li>
      <li>
        context 包含以下属性：
        <ul>
          <li>props</li>
          <li>chlidren ： 子节点数组；</li>
          <li>slots ： 一个函数，返回 slots 对象；</li>
          <li>data ： 组件的属性对象；</li>
          <li>parent ： 父组件的引用；</li>
          <li>
            listeners ： 父组件注册的事件监听函数数组； 等价于 data.on 对象；
          </li>
          <li>injections</li>
        </ul>
      </li>
      <li>
        函数组件非常适合用来作为包装组件：
        <ul>
          <li>可以动态选择真正要渲染的组件；</li>
          <li>可以在传递数据到子组件之前， 处理各种数据；</li>
        </ul>
      </li>
    </ul>
    <C01></C01>
    <C02></C02>
  </div>
</template>
<script>
import Vue from "vue";
import C01 from "./06-01-passing-attributes-and-events-to-child-elements";
import C02 from "./06-02-slots-vs-children";

Vue.component("MyComponent210601", {
  functional: true,
  props: ["level"],
  render(h, context) {
    return h(`h${context.props.level}`, context.children);
  }
});

export default {
  data() {
    return {};
  },
  components: {
    C01,
    C02
  }
};
</script>
<style scoped></style>
