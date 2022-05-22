<template>
  <fieldset>
    <legend>props-declaration</legend>

    <CompG :t-age="20" t-name="luotao"></CompG>
  </fieldset>

  <fieldset>
    <legend>prop-passing-details</legend>

    <!--
        声明 props 时通常使用 camelCase,
        传递 props 时通常使用 kebab-case, 当然 camelCase 也是支持的
    -->
    <CompG :t-age="20" t-name="luotao"></CompG>
    <CompG :tAge="20" tName="luotao"></CompG>
  </fieldset>

  <fieldset>
    <legend>prop-validation</legend>

    <CompG :t-age="22"></CompG>

    <!--
        Boolean 类型的 prop 类似于 Boolean 类型的 attribute,
        present 时表示传值为 true,
        absent  时表示传值为 undefined
    -->
    <CompG t-b></CompG>
    <CompG :t-b="true"></CompG>
  </fieldset>
</template>

<script lang="ts" setup>
  // http://localhost:8888/guide/components/props
  import CompG from '@/components/CompG.vue';
</script>

<style lang="css" scoped></style>
