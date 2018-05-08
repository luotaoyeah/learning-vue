<template>
  <div>
    <ul>
      <li>
        当前组件树的根组件；
        <p>
          <ElButton @click="handleClick">vm.$root.$el</ElButton>
        </p>
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
      console.log(this.$root.$el);
    }
  },
  components: {}
};
</script>
<style scoped>
</style>
