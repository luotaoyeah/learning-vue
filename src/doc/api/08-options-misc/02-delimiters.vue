<template>
  <div>
    <ul>
      <li>定义文本解析的分隔符；</li>
      <li>
        默认是双花括号： <span v-pre>{{ message }}</span>
      </li>
      <p><C01 /></p>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {
    C01: {
      template: "<ElTag>_[ name ]_</ElTag>",
      delimiters: ["_[", "]_"],
      data() {
        return { name: "tom" };
      }
    }
  }
};
</script>
