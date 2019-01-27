<template>
  <div>
    <p>
      在单文件组件和字符串模板中， 组件元素应该使用 PascalCase， 在 DOM 模板中，
      组件元素应该使用 kebab-case；
    </p>
    <ul>
      <li>
        PascalCase 相较于 kebab-case 有以下优势：
        <ul>
          <li>编辑器自动补全， 因为在 JS 代码中使用的也是 PascalCase；</li>
          <li>更加容易跟普通的 HTML 元素进行区分；</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
