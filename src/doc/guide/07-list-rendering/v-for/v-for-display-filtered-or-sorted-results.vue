<template>
  <div>
    <h1>7. Display filtered Or Sorted Results</h1>
    <h2>7.1.</h2>
    <p>
      <small>
        <i>
          如果要在不修改原数组的情况下，显示一个对原数组进行过滤或者排序的结果，
          可以使用 computed property；
        </i>
      </small>
    </p>
    <p>
      <small>原数组：</small>
      <span
        v-for="item in array01"
        :key="item"
      >{{item}}
      </span>
    </p>
    <p>
      <small>过滤后的数组：</small>
      <span
        v-for="item in evenArray01"
        :key="item"
      >{{item}}
      </span>
    </p>
    <h2>7.2.</h2>
    <p>
      <small>
        <i>
          如果不能使用 computed property（在嵌套的 v-for 循环里面），可以使用方法；
        </i>
      </small>
    </p>
    <p>
      <small>过滤后的数组：</small>
      <span
        v-for="item in evenArray02()"
        :key="item"
      >{{item}}
      </span>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      array01: [1, 2, 3, 4, 5]
    };
  },
  computed: {
    evenArray01() {
      return this.array01.filter(item => item % 2 === 0);
    }
  },
  methods: {
    evenArray02() {
      return this.array01.filter(item => item % 2 === 0);
    }
  }
};
</script>
<style scoped>
</style>
