<template>
  <div>
    <fieldset>
      <legend></legend>

      <p>{{ n }}</p>
      <p>
        <button @click="onClick">n++</button>
      </p>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'TheSimplestStore',
  // 通过 computed property 获取一个 state 数据
  computed: {
    n() {
      return this.$store.state.count;
    },
  },
  methods: {
    onClick() {
      // 通过 vm.$store.commit('SOME_MUTATION') 触发一个 mutation 方法执行, 从而修改 state 数据
      this.$store.commit('INCREMENT');
    },
  },
};
</script>

<style scoped></style>
