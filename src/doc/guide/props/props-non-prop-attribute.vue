<template>
  <div>
    <h1>5. Non-Prop Attributes</h1>
    <small>
      <ul>
        <li>
          在使用组件的时候，除了 props 属性之外，
          还可以使用任意的非 props 属性
          （即未在组件的 props 中定义的属性）；
        </li>
        <li>这些属性称之为：非 props 属性；</li>
        <li>非 props 属性会被添加到组件的根元素上；</li>
        <li>非 props 属性也可以使用 v-bind 绑定动态数据；</li>
      </ul>
    </small>
    <MyComponent
      id="my-component"
      v-bind:title="title"
    ></MyComponent>
    <h2>5.1. Replacing/Merging with Existing Attributes</h2>
    <small>
      <ul>
        <li>
          如果一个属性在组件模板的根元素上定义之后，
          在使用组件时，又在组件元素上定义了，
          那么在组件模板中定义的属性值会被覆盖；
        </li>
        <li>
          唯二的两个例外是 class 和 style，
          这两个属性的属性值被合并，
          即模板中的属性值和组件元素上的属性值都会被保留；
          其中，组件元素上的属性值会放在后面；
        </li>
      </ul>
    </small>
    <MyComponent
      id="my-component-01"
      class="foo"
    ></MyComponent>
    <h2>5.2. Disabling Attribute Inheritance</h2>
    <small>
      <ul>
        <li>默认情况下，非 props 属性会被添加到组件根元素上；</li>
        <li>
          如果不想非 props 属性被添加到组件根元素上，
          可以设置 inheritAttrs: false；
        </li>
      </ul>
    </small>
    <MyComponent02
      id="my-component-02"
      class="bar"
    ></MyComponent02>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("MyComponent", {
  template: "<p id='foo' class='bar'>MyComponent</p>"
});

Vue.component("MyComponent02", {
  template: "<p id='foo' class='foo'>MyComponent02</p>",
  inheritAttrs: false
});

export default {
  data() {
    return {
      title: "hello world"
    };
  }
};
</script>
<style scoped>
</style>
