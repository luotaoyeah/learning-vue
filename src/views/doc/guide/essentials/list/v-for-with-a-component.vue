<template>
  <section>
    <input v-model="nextText" :style="{ borderRadius: '3px' }" type="text" />
    <button :disabled="!nextText" :style="{ borderRadius: '3px', marginLeft: '12px' }" @click="add()">add</button>

    <hr />

    <ul>
      <comp-01 v-for="(n, index) of items" :key="n.id" :text="n.text" @remove="items.splice(index, 1)"></comp-01>
    </ul>
  </section>
</template>

<script>
// https://v3.vuejs.org/guide/list.html#v-for-with-a-component

import comp01 from './v-for-with-a-component.01';

export default {
  data() {
    return {
      items: [{ id: 1, text: 'a' }],
      nextId: 2,
      nextText: '',
    };
  },
  methods: {
    add() {
      this.items.push({
        id: this.nextId,
        text: this.nextText,
      });
      this.nextId += 1;
      this.nextText = '';
    },
  },
  components: {
    'comp-01': comp01,
  },
};
</script>
