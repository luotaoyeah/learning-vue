<template>
  <div>
    <section>
      <!------------------------------------------------------------------------------------------------------
          v-if / v-else 配套使用，类似于 if / else，
      ------------------------------------------------------------------------------------------------------->
      <template v-if="visible">
        <span>a</span>
        <span>b</span>
      </template>
      <template v-else>
        <span>c</span>
        <span>d</span>
      </template>
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/conditional.html#v-else

export default {
  data() {
    return {
      visible: true,
    };
  },
};
</script>
