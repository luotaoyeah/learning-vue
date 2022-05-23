<template>
  <fieldset>
    <legend>emitting-and-listening-to-events</legend>

    <!--
        事件名称会自动在 camelCase 和 kebab-case 之间转换, 因此可以混用,
        监听事件时, 通常使用 kebab-case, 跟 props 一样
    -->

    <CompH @tClick="fn01"></CompH>
    <CompH @t-click="fn02"></CompH>

    <CompH @tMove01="fn03"></CompH>
    <CompH @t-move-01="fn04"></CompH>

    <CompH @tClick01="fn05"></CompH>
    <CompH @t-click-01="fn06"></CompH>
  </fieldset>
</template>

<script lang="ts" setup>
  // http://localhost:8888/guide/components/events
  import CompH from '@/components/CompH.vue';

  function fn01() {
    console.log('tClick');
  }

  function fn02() {
    console.log('t-click');
  }

  function fn03() {
    console.log('tMove');
  }

  function fn04() {
    console.log('t-move');
  }

  function fn05() {
    console.log('tClick01');
  }

  function fn06() {
    console.log('t-click-01');
  }
</script>

<style lang="css" scoped></style>
