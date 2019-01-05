<template>
  <div>
    <h1>v-if</h1>
    <span v-if="show"> Now you see me. </span>
    <h1>v-for</h1>
    <ol>
      <li v-for="todo in todos" v-bind:key="todo.text">{{ todo.text }}</li>
    </ol>
  </div>
</template>
<script>
export default {
  name: "ConditionalAndLoop",
  data() {
    return {
      show: true,
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" }
      ]
    };
  }
};
</script>
<style scoped></style>
