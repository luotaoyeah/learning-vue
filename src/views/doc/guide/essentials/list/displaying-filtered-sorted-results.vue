<template>
  <section>
    <!------------------------------------------------------------------------------------------------------
        在不修改原数组的情况下，对数组进行过滤/排序展示，可以使用 computed property 或者 method 实现，
    ------------------------------------------------------------------------------------------------------->

    <fieldset>
      <legend>原始数组</legend>
      <ul>
        <li v-for="item of items" :key="item">{{ item }}</li>
      </ul>
    </fieldset>

    <fieldset>
      <legend>倒序</legend>
      <ul>
        <li v-for="item of reversedItems" :key="item">{{ item }}</li>
      </ul>
    </fieldset>

    <fieldset>
      <legend>偶数</legend>
      <ul>
        <li v-for="item of evenItems" :key="item">{{ item }}</li>
      </ul>
    </fieldset>
  </section>
</template>

<script>
// https://v3.vuejs.org/guide/list.html#displaying-filtered-sorted-results

export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5],
    };
  },
  computed: {
    reversedItems() {
      return [...this.items].reverse();
    },
    evenItems() {
      return this.items.filter((i) => i % 2 === 0);
    },
  },
};
</script>
