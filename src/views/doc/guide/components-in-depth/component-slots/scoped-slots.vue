<template>
  <fieldset>
    <my-list :items="items"></my-list>
    <hr />
    <my-list :items="items">
      <!------------------------------------------------------------------------------------------------------
          v-slot 的值是一个标识，通过它拿到所有的 slot props，
      ------------------------------------------------------------------------------------------------------->
      <template v-slot:default="slotProps">
        <span>{{ slotProps.index }}</span>
        .
        <span>{{ slotProps.item }}</span>
      </template>
    </my-list>
  </fieldset>

  <fieldset>
    <legend>DESTRUCTURING SLOT PROPS</legend>

    <my-list :items="items">
      <!------------------------------------------------------------------------------------------------------
          v-slot 的值可以使用 destructuring 语法，
      ------------------------------------------------------------------------------------------------------->
      <template v-slot:default="{ item, index: i }">
        <span>{{ i }}</span>
        .
        <span>{{ item }}</span>
      </template>
    </my-list>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-slots.html#scoped-slots

import comp01 from './scoped-slots.01.vue';

export default {
  data() {
    return {
      items: ['a', 'b', 'c'],
    };
  },
  components: {
    'my-list': comp01,
  },
};
</script>
