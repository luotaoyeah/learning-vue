<template>
  <CompK class='compk' foo="FOO" @click="fn01"></CompK>
</template>

<script lang="ts" setup>
  import CompK from '@/components/CompK.vue';

  function fn01() {
    console.log('click.CompK');
  }
</script>

<style scoped></style>
