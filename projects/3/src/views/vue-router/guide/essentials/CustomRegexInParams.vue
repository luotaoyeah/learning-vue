<template>
    <fieldset>
        <legend>custom-regex-in-params</legend>

        <div>{{ route.params.id }}</div>
    </fieldset>
</template>

<script lang="ts" setup>
    // http://localhost:8888/vue-router/guide/essentials/route-matching-syntax/custom-regex-in-params/9

    import { useRoute } from 'vue-router';

    const route = useRoute();
</script>

<style scoped></style>
