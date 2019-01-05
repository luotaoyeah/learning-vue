<template>
  <div>
    <p>不要在同一个元素上同时使用 v-if 和 v-for；</p>
    <ul>
      <li>
        下面两种情况可能导致 v-if 和 v-for 同时出现在同一个元素上面：
        <ul>
          <li>通过 v-if 过滤某些集合元素；</li>
          <li>通过 v-if 切换整个集合的显示或者隐藏；</li>
        </ul>
      </li>
      <li>
        对于第一种情况， 应该使用一个计算属性， 返回过滤后的集合；
        <ul v-if="showItem">
          <li v-for="item in activeItems" :key="item.id">{{ item.name }}</li>
        </ul>
      </li>
      <li>对于第二种情况， 应该将 v-if 放在上层元素上面；</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: "tom",
          active: true
        },
        {
          id: 2,
          name: "cat",
          active: false
        },
        {
          id: 3,
          name: "foo",
          active: true
        }
      ],
      showItem: true
    };
  },
  computed: {
    activeItems() {
      return this.items.filter(item => item.active);
    }
  }
};
</script>
<style scoped></style>
