<template>
  <div>
    <fieldset>
      <legend>Mutations</legend>

      <p>{{ count }}</p>
      <p>
        <button @click="onClick">increment</button>
        <button @click="onClick02">increment</button>
      </p>
    </fieldset>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Mutations',
  computed: {
    ...mapState({
      count: 'count',
    }),
  },
  methods: {
    onClick() {
      this.$store.commit('INCREMENT', { offset: 2 });
    },
    onClick02() {
      // 参数可以是一个对象类型, 通过 type 指定 mutation 方法
      this.$store.commit({ type: 'INCREMENT', offset: 3 });
    },
  },
};
</script>

<style scoped></style>
