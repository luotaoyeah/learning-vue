<template>
    <fieldset>
        <legend>A</legend>

        <slot></slot>
    </fieldset>
</template>

<script setup lang="ts">
    import { onActivated, onBeforeMount, onBeforeUnmount, onDeactivated, onMounted, onUnmounted } from 'vue';

    onMounted(() => {
        console.log('%c CompA.onMounted()', 'color:red');
    });

    onUnmounted(() => {
        console.log('%c CompA.onUnmounted()', 'color:red');
    });

    onBeforeMount(() => {
        console.log('%c CompA.onBeforeMount()', 'color:red');
    });

    onBeforeUnmount(() => {
        console.log('%c CompA.onBeforeUnmount()', 'color:red');
    });
</script>

<style scoped></style>
