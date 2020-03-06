<template>
  <div>
    <section>
      <!------------------------------------------------------------------------------------------------------
          v-if 和 v-for 在同一个组件上同时使用时，v-if 优先判断，
          不推荐同时使用 v-if 和 v-for，
      ------------------------------------------------------------------------------------------------------->
      <!--eslint-disable-next-line vue/no-use-v-if-with-v-for-->
      <span v-for="item of items" v-if="visible" :key="item.id">{{ item.id }}</span>
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/conditional.html#v-if-with-v-for

export default {
  data() {
    return {
      visible: false,
      items: [{ id: '1' }, { id: '2' }, { id: '3' }],
    };
  },
};
</script>
