<template>
    <fieldset>
        <legend>events-validation</legend>

        <CompI v-model="value01" v-model:t-name="value02" v-model:t-age.number="value03"></CompI>
        <p>value01: {{ value01 }}</p>
        <p>value02: {{ value02 }}</p>
        <p>value03: {{ value03 }}</p>

        <hr />
    </fieldset>
</template>

<script lang="ts" setup>
    // http://localhost:8888/guide/components/v-model
    import CompI from '@/components/CompI.vue';
    import { ref } from 'vue';

    const value01 = ref('');
    const value02 = ref('');
    const value03 = ref(18);
</script>

<style lang="css" scoped></style>
