<template>
  <div>
    <section>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.value }}</li>
      </ul>
    </section>

    <hr />

    <!------------------------------------------------------------------------------------------------------
        可以使用 in 或者 of 作为操作符号，
    ------------------------------------------------------------------------------------------------------->
    <section>
      <ul>
        <li v-for="item of items" :key="item.id">{{ item.value }}</li>
      </ul>
    </section>

    <hr />

    <!------------------------------------------------------------------------------------------------------
        使用 `(item, index) of items` 的形式，同时获取每次循环的值和索引，
    ------------------------------------------------------------------------------------------------------->
    <section>
      <ul>
        <li v-for="(item, index) of items" :key="item.id">{{ index }}.{{ item.value }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/list.html#mapping-an-array-to-elements-with-v-for

export default {
  data() {
    return {
      items: [
        { id: '1', value: 'a' },
        { id: '2', value: 'b' },
        { id: '3', value: 'c' },
      ],
    };
  },
};
</script>
