<template>
  <fieldset>
    <legend>B</legend>
  </fieldset>
</template>

<script setup lang="ts">
  import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';

  onMounted(() => {
    console.log('%c     onMounted()', 'color:blue');
  });

  onUnmounted(() => {
    console.log('%c     onUnmounted()', 'color:blue');
  });

  onBeforeMount(() => {
    console.log('%c     onBeforeMount()', 'color:blue');
  });

  onBeforeUnmount(() => {
    console.log('%c     onBeforeUnmount()', 'color:blue');
  });
</script>

<style scoped></style>
