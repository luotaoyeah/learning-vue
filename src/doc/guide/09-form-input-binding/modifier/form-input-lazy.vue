<template>
  <div>
    <h1>1. .lazy</h1>
    <p>
      <small>
        <i>
          默认情况下，v-model 绑定会在每次 input 事件触发数据更新，
          我们可以通过 .lazy 修饰符，指定它在 change 事件触发数据更新，
          而不再是 input 事件；
        </i>
      </small>
    </p>
    <p>
      <small>输入时实时更新：</small>
      <input
        type="text"
        style="border-radius: 3px;padding: 7px;"
        v-model="message"
      >
    </p>
    <p>
      <small>失去焦点时更新：</small>
      <input
        type="text"
        style="border-radius: 3px;padding: 7px;"
        v-model.lazy="message"
      >
    </p>
    <p>Message: {{message}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return { message: "" };
  }
};
</script>
<style scoped>
</style>
