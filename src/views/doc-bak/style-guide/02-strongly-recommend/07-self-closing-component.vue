<template>
  <div>
    <div>
      如果一个组件元素中间没有任何内容， 那么在：
      <ul>
        <li>单文件组件</li>
        <li>字符串模板</li>
        <li>JSX</li>
      </ul>
      中， 都应该使用自关闭的形式； 在：
      <ul>
        <li>DOM 模板</li>
      </ul>
      中， 不能使用自关闭的形式；
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
