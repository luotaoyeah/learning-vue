<template>
  <div>
    <p>
      对于应用来说， 除了顶层组件以及布局组件之外， 在所有其他的组件中，
      样式都应该是仅限于当前组件作用域的， 而不应该是全局作用域的；
    </p>
    <ul>
      <li>
        这并不是说一定要使用 scoped 属性， 也可以使用 CSS 模块， BEM，
        或者其他约定来实现；
      </li>
    </ul>
    <p>
      对于组件库来说， 应该倾向于使用 CSS 类名的方式， 而不应该使用 scoped
      属性；
    </p>
    <ul>
      <li>这种方式易于让用户覆盖组件原有的样式；</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
