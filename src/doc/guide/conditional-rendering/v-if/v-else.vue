<template>
  <div>
    <h1>2. v-else, v-else-if</h1>
    <h2>2.1. v-else</h2>
    <p>
      <small>
        <i>
          可以在 v-if 或者 v-else-if 后面紧跟一个 v-else；
        </i>
      </small>
    </p>
    <p v-if="active">Now you see me.</p>
    <p v-else>Now you don't.</p>
    <h2>2.2. v-else-if</h2>
    <p>
      <small>
        <i>
          可以在 v-if 和 v-else 之间使用多个 v-else-if；
        </i>
      </small>
    </p>
    <p v-if="name === 'A'">A</p>
    <p v-else-if="name === 'B'">B</p>
    <p v-else-if="name === 'C'">C</p>
    <p v-else>D</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: true,
      name: "A"
    };
  }
};
</script>
<style scoped>
</style>
