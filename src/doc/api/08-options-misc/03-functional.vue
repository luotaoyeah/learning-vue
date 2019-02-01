<template>
  <div>
    <ul>
      <li>声明一个组件是函数组件；</li>
      <li>函数组件不能声明 template 组件选项， 只能声明 render 组件选项；</li>
      <li>函数组件是无状态的（没有 data 选项）；</li>
      <li>函数组件是没有组件实例的， 也因此没有声明周期函数；</li>
    </ul>
    <p><C01 name="tom" /></p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    C01: {
      render(h, context) {
        return h("ElTag", [context.props.name]);
      },
      functional: true,
      props: ["name"]
    }
  }
};
</script>
