<template>
  <section>
    <!------------------------------------------------------------------------------------------------------
        直接操作数组的方法，如 push/pop/shift/unshift/splice/reverse/sort 等，
        它们会修改数组本身，可以触发数组变更监测，
    ------------------------------------------------------------------------------------------------------->

    <p>
      <button :style="{ borderRadius: '3px', marginRight: '12px' }" @click="push()">push</button>
      <button :style="{ borderRadius: '3px', marginRight: '12px' }" @click="pop()">pop</button>
      <button :style="{ borderRadius: '3px', marginRight: '12px' }" @click="shift()">shift</button>
      <button :style="{ borderRadius: '3px', marginRight: '12px' }" @click="unshift()">unshift</button>
      <button :style="{ borderRadius: '3px', marginRight: '12px' }" @click="splice()">splice</button>
      <button :style="{ borderRadius: '3px', marginRight: '12px' }" @click="sort()">sort</button>
      <button :style="{ borderRadius: '3px', marginRight: '12px' }" @click="reverse()">reverse</button>
    </p>

    <ul>
      <li v-for="item of items" :key="item.id">{{ item.id }}</li>
    </ul>
  </section>
</template>

<script>
// https://v3.vuejs.org/guide/list.html#mutation-methods

export default {
  data() {
    return { items: [{ id: 1 }] };
  },
  methods: {
    push() {
      this.items.push({ id: Math.max(...this.items.map((i) => i.id)) + 1 });
    },
    pop() {
      this.items.pop();
    },
    shift() {
      this.items.shift();
    },
    unshift() {
      this.items.unshift({ id: Math.min(...this.items.map((i) => i.id)) - 1 });
    },
    splice() {
      this.items.splice(0, 1);
    },
    sort() {
      this.items.sort((x, y) => x.id - y.id);
    },
    reverse() {
      this.items.reverse();
    },
  },
};
</script>
