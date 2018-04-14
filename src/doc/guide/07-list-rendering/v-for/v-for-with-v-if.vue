<template>
  <div>
    <h1>10. v-for with v-if</h1>
    <p>
      <small>
        <i>
          v-for 和 v-if 在同一个元素上使用时，v-for 的优先级高；
          即先执行 v-for，然后 v-if 作用于每一个循环项；
          也就是说，可以通过 v-if 控制某一个循环项是否渲染；
        </i>
      </small>
    </p>
    <ul>
      <li
        v-for="item in items"
        v-if="!item.disabled"
        :key="item.value"
      >{{item.value}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          value: "tom",
          disabled: false
        },
        {
          value: 18,
          disabled: false
        },
        {
          value: 100,
          disabled: true
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>
