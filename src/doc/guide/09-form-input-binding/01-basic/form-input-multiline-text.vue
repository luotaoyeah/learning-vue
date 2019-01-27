<template>
  <div>
    <h1>2. Multiline Text</h1>
    <textarea
      style="border-radius: 3px;"
      type="textarea"
      rows="3"
      placeholder="edit me"
      v-model="message"
    ></textarea>
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
