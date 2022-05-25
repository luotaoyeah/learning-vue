<template>
    <fieldset>
        <legend>passing-props</legend>

        <CompD :t-title="'FOO'"></CompD>
        <CompD :t-title="'BAR'"></CompD>
    </fieldset>

    <fieldset>
        <legend>listening-to-events</legend>

        <CompD @t-click="fn01"></CompD>
    </fieldset>

    <fieldset>
        <legend>dynamic-components</legend>

        <component :is="comp01" :style="style01" v-html="'FOO'"></component>
        <button @click="toggle">toggle</button>
    </fieldset>
</template>

<script lang="ts" setup>
    // http://localhost:8888/guide/essentials/component-basics
    import CompD from '@/components/CompD.vue';
    import { ref } from 'vue';

    function fn01() {
        console.log('t-click');
    }

    // --------------------------------------------------
    const comp01 = ref<'span' | 'div'>('span');
    const style01 = { border: '1px solid #000', 'border-radius': '3px', padding: '3px 3px 2px 3px' };

    function toggle() {
        if (comp01.value === 'span') {
            comp01.value = 'div';
        } else {
            comp01.value = 'span';
        }
    }
</script>

<style lang="css" scoped></style>
