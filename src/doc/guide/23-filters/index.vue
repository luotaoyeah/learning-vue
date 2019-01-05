<template>
  <el-tabs tab-position="left" style="height: 100%;">
    <el-tab-pane label="1.1.">
      <ul>
        <li>vue 支持过滤器（filters）， 用来格式化文本；</li>
        <li>filters 可以用在模板字符串和 v-bind 绑定表达式中；</li>
        <li>
          可以通过实例选项（filters）来定义本地的过滤器；
          <p><el-input v-model="message01"></el-input></p>
          <p v-bind:id="message01 | capitalize">{{ message01 | capitalize }}</p>
        </li>
        <li>过滤器函数的第一个参数为表达式的值；</li>
        <li>
          多个过滤器可以串联起来， 下一个过滤器的输入为上一个过滤器的输出；
          <p><el-input v-model="message02"></el-input></p>
          <p>{{ message02 | capitalize | join }}</p>
        </li>
        <li>
          过滤器其实就是函数，因此可以给过滤器传递参数；
          <pre>message | filtera('tom', 18)</pre>
          其中， 表达式的值会作为第 1 个参数， 字符串 'tom' 为第 2 个参数，
          表达式 message02 的值为第 3 个参数；
          <p><el-input v-model="message03"></el-input></p>
          <p>{{ message03 | capitalize | filter03("tom", message02) }}</p>
        </li>
      </ul>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      message01: "",
      message02: "",
      message03: ""
    };
  },
  components: {},
  filters: {
    capitalize(value) {
      if (!value) {
        return "";
      }
      return String(value).toUpperCase();
    },
    join(value) {
      if (!value) {
        return "";
      }
      return value.split("").join(", ");
    },
    filter03(value, name, age) {
      return `${value} ${name} ${age}`;
    }
  }
};
</script>
<style scoped></style>
