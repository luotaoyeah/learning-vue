<template>
  <div>
    <section>
      <!------------------------------------------------------------------------------------------------------
          v-if / v-else-if 配套使用，类似于 if / else if，
      ------------------------------------------------------------------------------------------------------->
      <span v-if="value === 'a'">a</span>
      <span v-else-if="value === 'b'">b</span>
      <span v-else-if="value === 'c'">c</span>
      <span v-else>d</span>
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/conditional.html#v-else-if

export default {
  data() {
    return {
      value: 'b',
    };
  },
};
</script>
