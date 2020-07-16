<template>
  <fieldset>
    <legend>CompB</legend>

    <input type="text" />
  </fieldset>
</template>

<script>
export default {
  name: 'CompC',
  activated() {
    console.log('CompC.activated()');
  },
  deactivated() {
    console.log('CompC.deactivated()');
  },
};
</script>

<style scoped></style>
