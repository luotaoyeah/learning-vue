<template>
  <div>
    <h1>1. Event Names</h1>
    <small>
      <ul>
        <li>事件的名称不会像组件名称和 props 属性名称，会自动转换格式；</li>
        <li>在发出（$emit）事件的时候定义的事件名称，在监听（v-on）的时候也必须使用完全一样的事件名称；</li>
        <li>建议事件名称都使用 kebab-case；</li>
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
