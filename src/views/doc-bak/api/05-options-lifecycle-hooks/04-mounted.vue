<template>
  <div>
    <ul>
      <li>组件挂载完成；</li>
      <li>此时， vm.$el 初始完成；</li>
      <li>
        此时， 不能保证所有的子组件都挂载完成了， 可以在 mounted 里面使用 vm.$nextTick() 来保证；
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  async mounted() {
    /* this.$el: DIV */
    console.log("this.$el:", this.$el.tagName);

    await this.$nextTick();
    /* 此时，所有的子组件都挂载完成了 */
  },
  components: {},
};
</script>
