<template>
  <section>
    <!------------------------------------------------------------------------------------------------------
        当被遍历的是一个数字 n 时，表示遍历 n 次，
    ------------------------------------------------------------------------------------------------------->
    <ul>
      <li v-for="(n, index) of 10" :key="n">{{ index }}.{{ n }}</li>
    </ul>
  </section>
</template>

<script>
// https://v3.vuejs.org/guide/list.html#v-for-with-a-range

export default {};
</script>
