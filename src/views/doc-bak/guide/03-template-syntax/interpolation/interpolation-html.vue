<template>
  <div>
    <h1>2. Raw HTML</h1>
    <p>Using mustache：{{ rawHtml }}</p>
    <p>Using v-html directive： <span v-html="rawHtml"></span></p>
    <small>
      <i>使用 v-html 解析 HTML 内容，容易导致跨站脚本攻击；一般只解析信任的内容，最好不要解析用户输入的内容；</i>
    </small>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rawHtml: '<span style="color: red;">This should be red.</span>',
    };
  },
};
</script>
