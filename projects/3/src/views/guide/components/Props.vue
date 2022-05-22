<template>
  <fieldset>
    <legend>props-declaration</legend>

    <CompG t-name="luotao" :t-age="20"></CompG>
  </fieldset>

  <fieldset>
    <legend>prop-passing-details</legend>

    <!--
        声明 props 时通常使用 camelCase,
        传递 props 时通常使用 kebab-case, 当然 camelCase 也是支持的
    -->
    <CompG t-name="luotao" :t-age="20"></CompG>
    <CompG tName="luotao" :tAge="20"></CompG>
  </fieldset>
</template>

<script lang="ts" setup>
  // http://localhost:8888/guide/components/props
  import CompG from '@/components/CompG.vue';
</script>

<style lang="css" scoped></style>
