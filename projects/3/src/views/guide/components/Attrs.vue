<template>
  <fieldset>
    <legend>attribute-inheritance</legend>

    <CompJ id="foo" @click="fn01"></CompJ>
  </fieldset>
</template>

<script lang="ts" setup>
  // http://localhost:8888/guide/components/attrs
  import CompJ from '@/components/CompJ.vue';

  function fn01() {
    console.log('click outer');
  }
</script>

<style lang="css" scoped></style>
