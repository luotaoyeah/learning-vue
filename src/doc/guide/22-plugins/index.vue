<template>
  <el-tabs
    tab-position="left"
    style="height: 100%;"
  >
    <el-tab-pane label="Writing a Plugin">
      <ul>
        <li>
          使用 vue 的插件可以实现以下功能：
          <ul>
            <li>添加全局的方法和属性；</li>
            <li>添加全局的指令，过滤器，过渡；</li>
            <li>通过全局的 mixin 添加组件选项；</li>
            <li>通过 Vue.prototype 添加实例方法；</li>
          </ul>
        </li>
        <li>
          插件必须提供一个 install 方法，
          方法接收 2 个参数：'Vue'，'插件配置对象'；
        </li>
      </ul>
    </el-tab-pane>
    <el-tab-pane label="Using a Plugin">
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped>
</style>
