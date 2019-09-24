<template>
  <div>
    <ul>
      <li>表达式类型：string</li>
      <li>
        描述：绑定元素的 innerHTML 属性；
        <ul>
          <li>
            表达式中的 HTML 不会被作为模板进行处理；
            <p v-text="html01"></p>
            <p v-html="html01"></p>
          </li>
          <li>
            在单文件组件中，scoped 的样式不会被应用到表达式中的元素上；
            <p v-html="html02"></p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      html01: "<i>HELLO</i>",
      html02: '<small class="red">HELLO</small>',
    };
  },
  components: {},
};
</script>
<style scoped>
.red {
  color: #ff0000;
}
</style>
