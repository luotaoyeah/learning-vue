<template>
  <div class="el">
    <ul>
      <li>
        当前组件实例的 DOM 根元素；
        <p><ElButton @click="handleClick">vm.$el</ElButton></p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleClick() {
      console.log(this.$el);
    }
  },
  components: {}
};
</script>
<style scoped></style>
