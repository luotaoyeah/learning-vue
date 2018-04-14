<template>
  <div>
    <h1>3. Organizing Components</h1>
    <small>
      <ul>
        <li>通常一个应用由很多组件构成，这些组件以树的形式来组织；</li>
        <li>组件必须先注册才能使用，注册组件有两种方式；
          <ul>
            <li>global: 使用 Vue.component() 方法注册全局组件；</li>
            <li>local: 通过组件的 components 选项注册本地组件；</li>
          </ul>
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
<style scoped>
</style>
