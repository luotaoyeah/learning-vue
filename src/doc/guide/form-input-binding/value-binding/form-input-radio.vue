<template>
  <div>
    <h1>2. Radio</h1>
    <p>
      <input
        type="radio"
        id="radio01"
        v-bind:value="a"
        v-model="picked"
      >
      <label for="radio01">AAA</label>
    </p>
    <p>
      <input
        type="radio"
        id="radio02"
        v-bind:value="b"
        v-model="picked"
      >
      <label for="radio02">BBB</label>
    </p>
    <p>Picked: {{picked}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      picked: "",
      a: "aaa",
      b: "bbb"
    };
  }
};
</script>
<style scoped>
</style>
