<template>
  <div>
    <h1>8. v-for with a Range</h1>
    <p>
      <small>
        <i>
          v-for 可以循环一个数字，表示要将模板循环渲染多少次；
        </i>
      </small>
    </p>
    <span
      v-for="item in 10"
      :key="item"
    >{{item}}
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
