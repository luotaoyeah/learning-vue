<template>
    <fieldset>
        <legend>attribute-inheritance</legend>

        <CompJ id="foo" @click="fn01"></CompJ>
    </fieldset>

    <fieldset>
        <legend>nested-component-inheritance</legend>

        <CompL class="compl" foo="BAR" @click="fn02"></CompL>
    </fieldset>
</template>

<script lang="ts" setup>
    // http://localhost:8888/guide/components/attrs

    import CompJ from '@/components/CompJ.vue';
    import CompL from '@/components/CompL.vue';

    function fn01() {
        console.log('click outer');
    }

    function fn02() {
        console.log('click.CompL');
    }
</script>

<style lang="css" scoped></style>
