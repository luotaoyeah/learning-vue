<template>
    <fieldset>
        <legend>测试组件</legend>

        <ComponentA msg="FOO"></ComponentA>
    </fieldset>
</template>

<script lang="tsx" setup>
    // http://localhost:8888/lib/test-component

    import { ComponentA } from '@kengic/vue';
</script>

<style scoped></style>
