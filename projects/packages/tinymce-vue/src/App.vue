<template>
    <Editor
        v-model="content"
        :init="{
            plugins: 'lists link image table code help wordcount',
        }"
        api-key="no-api-key"
        @paste="onPaste"
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
    import { ref } from 'vue';

    const content = ref('');

    function onPaste(event, editor) {
        console.log(event, editor);
    }
</script>

<style scoped></style>
