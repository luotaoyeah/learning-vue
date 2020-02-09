<template>
  <div>
    <section>
      <!------------------------------------------------------------------------------------------------------
          当 :style 的值是一个 object 时，
          key   表示某个 css 样式，可以使用 camelCase，也可以使用 kebab-case（需要使用引号），
          value 表示对应的样式值，
      ------------------------------------------------------------------------------------------------------->
      <p :style="{ fontSize: '14px', 'font-weight': 'bold', ...style01 }">foo</p>
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/class-and-style.html#object-syntax-2

export default {
  data() {
    return {
      style01: {
        color: 'red',
      },
    };
  },
};
</script>
