<template>
  <div>
    <ul>
      <li>
        根组件实例；
        <p><ElButton @click="handleClick">vm.$root.$el</ElButton></p>
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
