<template>
  <fieldset>
    <legend>A</legend>

    <slot></slot>
  </fieldset>
</template>

<script setup lang="ts">
  import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';

  onMounted(() => {
    console.log('%c onMounted()', 'color:red');
  });

  onUnmounted(() => {
    console.log('%c onUnmounted()', 'color:red');
  });

  onBeforeMount(() => {
    console.log('%c onBeforeMount()', 'color:red');
  });

  onBeforeUnmount(() => {
    console.log('%c onBeforeUnmount()', 'color:red');
  });
</script>

<style scoped></style>
