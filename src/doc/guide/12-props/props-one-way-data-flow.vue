<template>
  <div>
    <h1>3. One-Way Data Flow</h1>
    <small>
      <ul>
        <li>
          所有的 props 属性都是单向绑定的；
          当修改绑定的父组件的属性时，子组件的属性会自动更新；
          反之则不成立；这种策略是为了防止子组件不小心修改了父组件的属性，
          防止应用的数据流变得难以理解；
        </li>
        <li>
          在子组件中，不能直接修改 props 属性的值，
          因为一旦绑定的父组件的属性发生了变化， 子组件中的 props
          属性会自动更新，覆盖掉你的修改值；
        </li>
        <li>
          有两种情况会涉及到对 props 属性的修改：
          <ul>
            <li>使用 props 属性值作为初始值，用来初始化子组件的 data 属性；</li>
            <li>使用 computed 属性，对 props 属性进行处理；</li>
          </ul>
        </li>
        <li>
          因为对象和数组是引用传递的， 如果 props 属性的类型是对象或者数组，
          则在子组件中修改该对象（或数组）的属性， 会影响到父组件；
        </li>
      </ul>
    </small>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped></style>
