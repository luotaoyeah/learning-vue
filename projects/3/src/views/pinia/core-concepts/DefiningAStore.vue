<template>
    <fieldset>
        <legend>defining-a-store</legend>

        <div>{{ store01.getFoo }}</div>
        <button @click="store01.incrementFoo()">++</button>

        <div>{{ store02.getFoo }}</div>
        <button @click="store02.incrementFoo()">++</button>
    </fieldset>
</template>

<script lang="ts" setup>
    // http://localhost:8888/pinia/core-concepts/defining-a-store

    import { useStore01Store } from '@/views/pinia/core-concepts/store01';
    import { useStore02Store } from '@/views/pinia/core-concepts/store02';

    const store01 = useStore01Store();
    const store02 = useStore02Store();
</script>

<style scoped></style>
