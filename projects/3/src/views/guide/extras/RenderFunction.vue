<template>
    <fieldset>
        <legend>render-functions</legend>

        <CompA></CompA>
    </fieldset>

    <fieldset>
        <legend>jsx-tsx</legend>

        <CompR></CompR>
        <CompS></CompS>
        <CompS02></CompS02>
    </fieldset>
</template>

<script lang="ts" setup>
    // http://localhost:8888/guide/extras/render-function

    import { defineComponent, h } from 'vue';
    import { CompR } from '@/components/CompR';
    import CompS from '@/components/CompS.vue';
    import CompS02 from '@/components/CompS.tsx';

    const CompA = defineComponent({
        setup() {
            return () => h('div', { class: 'foo', style: { color: 'red' } }, ['HELLO']);
        },
    });
</script>

<style lang="css" scoped></style>
