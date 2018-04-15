<template>
  <div>
    <h1>v-on</h1>
    <button v-on:click="toggle">show: {{show}}</button>
    <h1>v-model</h1>
    <p>{{message}}</p>
    <input type="text" v-model="message" />
  </div>
</template>
<script>
export default {
  name: "HandingUserInput",
  data() {
    return {
      show: true,
      message: "hello world"
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
  }
};
</script>
<style scoped>
</style>
