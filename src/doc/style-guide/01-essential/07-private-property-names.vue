<template>
  <div>
    <p>插件和 mixin 中的自定义私有属性， 应该加上前缀：$_PluginName_；</p>
    <ul>
      <li>$ 前缀被 vue 用来表示：暴露给用户的组件实例属性和方法；</li>
      <li>_ 前缀被 vue 用来表示：vue 自己的私有属性；</li>
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
