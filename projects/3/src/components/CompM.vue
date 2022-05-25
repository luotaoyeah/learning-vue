<template>
    <fieldset>
        <legend>M</legend>

        <!--<slot> 未指定 name 时, name 默认为 default-->
        <slot :foo="1" :bar="2"></slot>
    </fieldset>
</template>

<script lang="ts" setup></script>

<style scoped></style>
