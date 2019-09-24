<template>
  <div>
    <h1>4. Prop Validation</h1>
    <small>
      <ul>
        <li>
          可以给 props 属性指定一些验证规则， 当使用组件时，如果未满足这些验证规则， vue 会在控制台进行警告提示；
        </li>
        <li>
          组件的 props 配置项的值，可以是：
          <ul>
            <li>字符串（一个 props 属性的名称）；</li>
            <li>字符串数组（多个 props 属性的名称）；</li>
            <li>对象（属性名表示 props 属性的名称，属性值表示验证规则）；</li>
          </ul>
        </li>
        <li>
          使用对象类型指定 props 属性的验证规则时，有以下几种形式：
          <ul>
            <li>（propA: null）：指定属性的类型可以使任意类型；</li>
            <li>（propA: Number）：指定属性的类型必须是 Number；</li>
            <li>（propA: { type: Number }）：指定属性的类型必须是 Number；</li>
            <li>
              （propA: [Number, String]）：指定属性的类型可以是 Number 或者 String；
            </li>
            <li>
              （propA: { type: [Number, String] }）：指定属性的类型可以是 Number 或者 String；
            </li>
            <li>（propA: { required: true }）：指定属性必须提供；</li>
            <li>（propA: { default: 18 }）：指定属性的默认值；</li>
            <li>
              （propA: { type: [ Object, Array ], default() { return 18; } }）：
              如果属性的类型是对象或者数组，其默认值必须使用函数返回的形式来指定（类似组件的 data 配置项）；
            </li>
            <li>
              （propA: { validator(value) { return value > 18; } }）： 使用自定义验证函数；
            </li>
            <li>
              属性的验证是在组件的实例化之前，所以在 default 函数和 validator 函数里面， data 和 computed 是不可用的；
            </li>
          </ul>
        </li>
      </ul>
      <h2>4.1. Type Checks</h2>
      <small>
        <ul>
          <li>
            验证规则中的 type 表示验证数据类型，可以是以下几个原生的构造函数：
            <ul>
              <li>String</li>
              <li>Number</li>
              <li>Boolean</li>
              <li>Symbol</li>
              <li>Object</li>
              <li>Array</li>
              <li>Function</li>
            </ul>
          </li>
          <li>也可以是自定义的构造函数， 此时会使用 instanceof 来验证类型；</li>
        </ul>
      </small>
    </small>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
