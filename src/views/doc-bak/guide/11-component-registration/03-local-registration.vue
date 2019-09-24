<template>
  <div>
    <h1>3. Local Registration</h1>
    <small>
      <ul>
        <li>本地注册的组件只能在当前组件中使用；</li>
        <li>使用 components 配置项来注册本地组件；</li>
        <li>
          components 是一个对象，其中：
          <ul>
            <li>属性名表示组件名称；</li>
            <li>属性值表示组件的配置项对象；</li>
          </ul>
        </li>
      </ul>
    </small>
    <MyComponent></MyComponent>
    <my-component-a></my-component-a>
  </div>
</template>

<script>
const MyComponent = {
  template: "<p>MyComponent</p>",
};
export default {
  data() {
    return {};
  },
  components: {
    MyComponent,
    "my-component-a": MyComponent,
  },
};
</script>
