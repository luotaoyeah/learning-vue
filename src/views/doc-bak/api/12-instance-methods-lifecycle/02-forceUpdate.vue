<template>
  <div>
    <ul>
      <li>
        强制组件重新渲染；
        <p>
          <ElInput v-model="x" style="width: 100px;" />
          <ElButton>{{ x }}</ElButton>
          <ElButton @click="handleClick">vm.$forceUpdate</ElButton>
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
  created() {
    this.x = "x";
  },
  methods: {
    handleClick() {
      const vm = this;
      vm.$forceUpdate();
    },
  },
  components: {},
};
</script>
