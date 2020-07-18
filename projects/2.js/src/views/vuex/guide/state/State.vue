<template>
  <div>
    <fieldset>
      <legend>State</legend>

      <p>{{ myFoo }}</p>
      <p>{{ bar }}</p>
      <p>{{ myBaz }}</p>
      <p>{{ myAccount }}</p>
      <p>{{ myAccount202 }}</p>
    </fieldset>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'State',
  computed: {
    // 1. 自己定义 computed property, 在其中返回某个 state 数据
    myFoo() {
      return this.$store.state.foo;
    },
    // 2. 使用 mapState() 方法, 自动批量引入
    ...mapState(['bar']),
    ...mapState({
      myBaz: 'baz',
      myAccount: (state) => state.count,
      myAccount202(state) {
        return state.count + this.myFoo;
      },
    }),
  },
};
</script>

<style scoped></style>
