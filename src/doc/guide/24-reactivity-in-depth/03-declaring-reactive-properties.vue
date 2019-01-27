<template>
  <div>
    <ul>
      <li>
        组件应该在 data 对象中声明所有需要响应式的属性， 即使初始值为空；
        这样做有以下几个考虑：
        <ul>
          <li>
            vue 不能动态添加和删除顶层属性，
            所以一开始就将所有的属性都声明出来；
          </li>
          <li>能够更好地结合类型系统；</li>
          <li>使代码更加容易理解和维护；</li>
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
