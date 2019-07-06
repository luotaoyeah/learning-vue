<template>
  <div>
    <h1>1. v-for</h1>
    <h2>1.1</h2>
    <p>
      <small>
        <i> v-for 用来循环渲染一个数组，表达式的语法为：item in items； </i>
      </small>
    </p>
    <ul>
      <li v-for="item in items" :key="item.message">{{ item.message }}</li>
    </ul>
    <h2>1.2.</h2>
    <p>
      <small> <i> 在 v-for 元素块内，可以访问父范围的属性； </i> </small>
    </p>
    <ul>
      <li v-for="item in items" :key="item.message">{{ message }}: {{ item.message }}</li>
    </ul>
    <h2>1.3.</h2>
    <p>
      <small>
        <i> 表达式中支持第二个参数：index（索引），表示当前循环索引； </i>
      </small>
    </p>
    <ul>
      <li v-for="(item, itemIndex) in items" :key="item.message">{{ itemIndex }}: {{ item.message }}</li>
    </ul>
    <h2>1.4.</h2>
    <p>
      <small>
        <i>
          表达式中可以用 of 替换 in，类似于 JavaScript 中的 for...of 循环；
        </i>
      </small>
    </p>
    <ul>
      <li v-for="(item, itemIndex) of items" :key="item.message">{{ itemIndex }}: {{ item.message }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "parent",
      items: [{ message: "foo" }, { message: "bar" }]
    };
  }
};
</script>
