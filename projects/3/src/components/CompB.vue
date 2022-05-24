<template>
  <fieldset>
    <legend>B</legend>
  </fieldset>
</template>

<script setup lang="ts">
  import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';

  onMounted(() => {
    console.log('%c     CompB.onMounted()', 'color:blue');
  });

  onUnmounted(() => {
    console.log('%c     CompB.onUnmounted()', 'color:blue');
  });

  onBeforeMount(() => {
    console.log('%c     CompB.onBeforeMount()', 'color:blue');
  });

  onBeforeUnmount(() => {
    console.log('%c     CompB.onBeforeUnmount()', 'color:blue');
  });
</script>

<style scoped></style>
