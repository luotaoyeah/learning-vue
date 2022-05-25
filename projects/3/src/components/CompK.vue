<template>
    <fieldset>
        <legend>K</legend>

        {{ foo }}
        <button @click="emit('click')">CLICK</button>
        <button @click="fn01">attrs</button>
    </fieldset>
</template>

<script lang="ts" setup>
    import { useAttrs } from 'vue';

    defineProps(['foo']);
    const emit = defineEmits(['click']);

    const attrs = useAttrs();

    function fn01() {
        console.log('attrs:', attrs);
    }
</script>

<style scoped></style>
