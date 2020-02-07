<template>
  <div>
    <section>
      <!------------------------------------------------------------------------------------------------------
          当 class 的值为一个 object 时，key 表示 class name，value 为 true/false，表示十分应用这个 class name，
      ------------------------------------------------------------------------------------------------------->
      <p :class="{ foo: true, bar: false }">foo</p>

      <!------------------------------------------------------------------------------------------------------
          class 和 :class 可以同时存在，最终的结果是两个值加在一起，同名的 class name 都会保留，
          并且有先后顺序，谁先定义谁就在前面，
      ------------------------------------------------------------------------------------------------------->
      <p :class="{ bar: true, foo: true }" class="foo">bar foo foo</p>

      <!------------------------------------------------------------------------------------------------------
          该 object 可以是一个 data property 或者 computed property，
      ------------------------------------------------------------------------------------------------------->
      <p :class="class01">bar</p>
      <p :class="class02">foo</p>
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/class-and-style.html#object-syntax

export default {
  data() {
    return {
      class01: {
        foo: false,
        bar: true,
      },
    };
  },
  computed: {
    class02() {
      return {
        foo: !this.class01.foo,
        bar: !this.class01.bar,
      };
    },
  },
};
</script>
