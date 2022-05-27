<template>
    <fieldset><legend>glob-import</legend></fieldset>
</template>

<script lang="tsx" setup>
    // http://localhost:8888/vitejs/guide/features/glob-import

    const modules01 = import.meta.glob('./foo-*.ts', { eager: false });

    Object.keys(modules01).forEach((key) => {
        modules01[key]().then((module) => {
            console.log(module);
        });
    });

    const modules02 = import.meta.glob('./bar-*.ts', { eager: true });
    Object.keys(modules02).forEach((key) => {
        console.log(modules02[key]);
    });
</script>

<style scoped></style>
