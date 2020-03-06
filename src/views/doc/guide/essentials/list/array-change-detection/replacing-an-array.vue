<template>
  <section>
    <!------------------------------------------------------------------------------------------------------
        有些数组方法不会修改数组本身，如 slice/filter/concat 等，它们返回新的数组，
        我们可以通过对数组重新赋值的方式，触发变更检测，
    ------------------------------------------------------------------------------------------------------->

    <p>
      <button :style="{ borderRadius: '3px', marginRight: '12px' }" @click="slice()">slice</button>
      <button :style="{ borderRadius: '3px', marginRight: '12px' }" @click="filter()">filter</button>
      <button :style="{ borderRadius: '3px', marginRight: '12px' }" @click="concat()">concat</button>
    </p>

    <ul>
      <li v-for="item of items" :key="item.id">{{ item.id }}</li>
    </ul>
  </section>
</template>

<script>
// https://v3.vuejs.org/guide/list.html#replacing-an-array

export default {
  data() {
    return { items: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }] };
  },
  methods: {
    slice() {
      this.items = this.items.slice(1, 5);
    },
    filter() {
      this.items = this.items.filter((i) => i.id % 2 === 0);
    },
    concat() {
      this.items = this.items.concat([{ id: 7 }, { id: 8 }]);
    },
  },
};
</script>
