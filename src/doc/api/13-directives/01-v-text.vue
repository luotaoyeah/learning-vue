<template>
  <div>
    <ul>
      <li>表达式类型：string</li>
      <li>
        描述：绑定元素的 textContent 属性；
        <p><ElInput v-model="name" /></p>
        <ul>
          <li v-text="name"></li>
          <li>{{ name }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return { name: "hello" };
  },
  components: {}
};
</script>
<style scoped></style>
