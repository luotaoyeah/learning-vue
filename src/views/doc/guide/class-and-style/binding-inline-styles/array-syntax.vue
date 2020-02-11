<template>
  <div>
    <section>
      <!------------------------------------------------------------------------------------------------------
          当 :style 的值为一个 array，它的每个元素表示一个 style object
      ------------------------------------------------------------------------------------------------------->
      <p :style="[style01, style02]">foo</p>
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/class-and-style.html#array-syntax-2

export default {
  data() {
    return {
      style01: {
        color: 'red',
      },
      style02: {
        'font-size': '24px',
      },
    };
  },
};
</script>
