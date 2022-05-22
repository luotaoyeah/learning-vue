<template>
  <fieldset>
    <legend>global-registration</legend>

    <CompE></CompE>
  </fieldset>

  <fieldset>
    <legend>component-name-casing</legend>

    <!--
        注册组件时通常使用 PascalCase,
        使用组件时通常使用 PascalCase, 当然 kebab-case 也是支持的
    -->

    <CompE></CompE>
    <comp-e></comp-e>

    <CompF></CompF>
    <comp-f></comp-f>
  </fieldset>
</template>

<script lang="ts" setup>
  // http://localhost:8888/guide/components/registration
  import CompF from '@/components/CompF.vue';
</script>

<style lang="css" scoped></style>
