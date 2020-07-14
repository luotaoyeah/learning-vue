<template>
  <div>
    <p><b>ERROR</b></p>
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'AlertBox',
};
</script>

<style scoped>
div {
  border: 1px solid red;
  border-radius: 5px;
  padding: 12px;
  color: red;
}
</style>
