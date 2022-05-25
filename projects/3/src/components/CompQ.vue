<template>
    <fieldset>
        <legend>Q</legend>
    </fieldset>
</template>

<script lang="ts" setup>
    import { onActivated, onDeactivated, onMounted, onUnmounted } from 'vue';

    onMounted(() => {
        console.log('%c CompQ.onMounted()', 'color:red');
    });

    onActivated(() => {
        console.log('%c CompQ.onActivated()', 'color:red');
    });

    onUnmounted(() => {
        console.log('%c CompQ.onUnmounted()', 'color:red');
    });

    onDeactivated(() => {
        console.log('%c CompQ.onDeactivated()', 'color:red');
    });
</script>

<style scoped></style>
