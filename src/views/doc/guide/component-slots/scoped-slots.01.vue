<template>
  <ul>
    <li v-for="(item, index) of items" :key="item">
      <!------------------------------------------------------------------------------------------------------
          直接在 slot 上绑定属性，它们叫做 slot props，
      ------------------------------------------------------------------------------------------------------->
      <slot :index="index" :item="item">{{ item }}</slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['items'],
};
</script>
