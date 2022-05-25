<template>
    <fieldset>
        <legend>render-functions</legend>

        <CompA></CompA>
    </fieldset>

    <fieldset>
        <legend>jsx-tsx</legend>

        <CompR></CompR>
    </fieldset>
</template>

<script lang="ts" setup>
    // http://localhost:8888/guide/extras/render-function

    import { defineComponent, h } from 'vue';
    import { CompR } from '@/components/CompR';

    const CompA = defineComponent({
        setup() {
            return () => h('div', { class: 'foo', style: { color: 'red' } }, ['HELLO']);
        },
    });
</script>

<style lang="css" scoped></style>
