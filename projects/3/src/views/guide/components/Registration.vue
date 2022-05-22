<template>
  <fieldset>
    <legend>global-registration</legend>

    <CompE></CompE>
  </fieldset>

  <fieldset>
    <legend>component-name-casing</legend>

    <!--注册组件时使用 PascalCase 命名, 使用组件时 PascalCase 和 kebab-case 都可以-->

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
