<template>
  <section>
    <!------------------------------------------------------------------------------------------------------
        跟 v-if 一样，v-for 也可以用在 <template> 上，
    ------------------------------------------------------------------------------------------------------->

    <ul>
      <template v-for="(n, index) of 3" :key="n">
        <li>index：{{ index }}</li>
        <li>value：{{ n }}</li>
        <hr />
      </template>
    </ul>
  </section>
</template>

<script>
// https://v3.vuejs.org/guide/list.html#v-for-on-a-template

export default {};
</script>
