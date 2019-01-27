<template>
  <div>
    <ul>
      <li>
        对元素及其子元素只编译一次， 然后会被当成静态内容；
        当后面数据变更触发重新渲染时， 元素内容将保持不变；
        <p><ElInput v-model="name" style="width: 200px;" /></p>
        <p>
          no v-once:
          <ElTag>{{ name }}</ElTag>
        </p>
        <p v-once>
          v-once:
          <ElTag>{{ name }}</ElTag>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return { name: "tom" };
  },
  components: {}
};
</script>
