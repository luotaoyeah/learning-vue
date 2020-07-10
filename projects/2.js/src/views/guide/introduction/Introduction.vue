<template>
  <div>
    <div v-bind:title="message">
      {{ message }}
    </div>

    <span>AAA</span>
    <span v-if="false">BBB</span>

    <ul>
      <li v-for="i in items" v-bind:key="i.id">{{ i.name }}</li>
    </ul>

    <div>
      <button v-on:click="onClick">click me</button>
    </div>

    <div>
      <input v-model="message" type="text" />
    </div>

    <div>
      <ul>
        <todo-item v-for="i in items" v-bind:key="i.id" :item="i"></todo-item>
      </ul>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem';

export default {
  data() {
    return {
      message: Date.now(),
      items: [
        {
          id: 1,
          name: 'A',
        },
        {
          id: 2,
          name: 'B',
        },
        {
          id: 3,
          name: 'C',
        },
      ],
    };
  },
  methods: {
    onClick() {
      alert('hello');
    },
  },
  components: {
    TodoItem,
  },
};
</script>

<style scoped></style>
