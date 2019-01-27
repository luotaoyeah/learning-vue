<template>
  <div>
    <h2>slots() vs children</h2>
    <ul>
      <li>
        children 包含组件元素中间所有的内容， slots() 返回的是所有的 slots；
      </li>
      <li>
        如果组件元素中间只有一个默认的 slot， 那么 children 等价于 [
        slots().default ]；
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>
