<template>
    <Editor
        v-model="content"
        :init="{
            plugins: 'lists link image table code help wordcount',
        }"
        api-key="no-api-key"
    ></Editor>

    <fieldset>
        <legend></legend>
        {{ content }}
    </fieldset>

    <fieldset>
        <legend></legend>
        <div v-html="content"></div>
    </fieldset>
</template>

<script setup>
    import Editor from '@tinymce/tinymce-vue';
    import { ref, watchEffect } from 'vue';

    const content = ref('');

    watchEffect(() => {
        console.log(content.value);
    });
</script>

<style scoped></style>
