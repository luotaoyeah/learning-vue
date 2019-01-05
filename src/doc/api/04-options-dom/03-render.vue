<template>
  <div>
    <ul>
      <li>类型：(h: () => VNode) => VNode</li>
      <li>
        描述：渲染函数；
        <ul>
          <li>如果组件是实例组件， 接收 1 个参数：createElement；</li>
          <li>如果组件是函数组件， 接收 2 个参数：createElement，context；</li>
          <li>render 的优先级比 template 高；</li>
        </ul>
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
<style scoped></style>
