<template>
  <ul v-if="items.length">
    <li v-for="item of items" :key="item">{{ item }}</li>
  </ul>
  <div v-else>EMPTY</div>
</template>

<script>
export default {
  props: ['items'],
};
</script>
