<template>
  <div>
    <ol>
      <todo-item v-for="item in groceries" v-bind:key="item.id" v-bind:todo="item"></todo-item>
    </ol>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{todo.text}}</li>"
});

export default {
  name: "ComposingWithComponents",
  data() {
    return {
      groceries: [
        {
          id: 0,
          text: "Vegetables"
        },
        {
          id: 1,
          text: "Cheese"
        },
        {
          id: 2,
          text: "Whatever else humans are supposed to eat"
        }
      ]
    };
  }
};
</script>
