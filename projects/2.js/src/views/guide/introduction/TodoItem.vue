<template>
  <li>{{ item.name }}</li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['item'],
};
</script>

<style scoped></style>
