<template>
    <fieldset>
        <legend>custom-regex-in-params</legend>

        <div>{{ route.params.ids }}</div>
    </fieldset>
</template>

<script lang="ts" setup>
    // http://localhost:8888/vue-router/guide/essentials/route-matching-syntax/repeatable-params/1/2/3/foo

    import { useRoute } from 'vue-router';

    const route = useRoute();
</script>

<style scoped></style>
