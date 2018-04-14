<template>
  <div>
    <h1>3. .trim</h1>
    <small>
      <ul>
        <li>.trim 会自动去除首尾的空白字符；</li>
      </ul>
    </small>
    <input
      style="border-radius: 3px;padding: 7px;"
      type="text"
      v-model="message01"
    >
    <p>message01: [{{message01}}]</p>
    <input
      type="text"
      style="border-radius: 3px;padding: 7px;"
      v-model.trim="message02"
    >
    <p>message01: [{{message02}}]</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message01: "",
      message02: ""
    };
  }
};
</script>
<style scoped>
</style>
