<template>
  <div>
    <h1>1. Text</h1>
    <input
      style="padding: 7px;border-radius: 3px;"
      type="text"
      placeholder="edit me"
      v-model="message"
    />
    <p>Message: {{ message }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "hello world"
    };
  }
};
</script>
