<template>
  <div>
    <ul>
      <li>key 主要用来作为 Virtual DOM 的 diff 算法的一个标识；</li>
      <li>如果一个元素没有声明 key 属性，则 vue 会尽可能重用这个元素；</li>
      <li>
        如果一个元素声明了 key 属性，则每次数据变更时，元素都会被重新渲染；
      </li>
      <li>同级元素的 key 属性必须唯一；</li>
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
