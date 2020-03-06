<template>
  <button @click="$emit('event-01', 1, 2, 3)">CLICK</button>
</template>

<script>
// https://v3.vuejs.org/guide/component-basics.html#emitting-a-value-with-an-event

export default {};
</script>

<style lang="less" scoped>
button {
  border-radius: 3px;
  margin-right: 12px;
}
</style>
