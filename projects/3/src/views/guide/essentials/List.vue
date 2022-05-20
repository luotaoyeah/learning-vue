<template>
  <fieldset>
    <legend>v-for-with-an-object</legend>

    <!--使用 v-for 遍历一个对象的属性-->
    <ul>
      <li v-for="(value, key, index) in obj01">{{ index }}. {{ key }}: {{ value }}</li>
    </ul>
  </fieldset>
</template>

<script lang="ts" setup>
  import { reactive, UnwrapNestedRefs } from 'vue';

  // http://localhost:8888/guide/essentials/list

  const obj01 = reactive({
    foo: 'A',
    bar: 'B',
    baz: 'C',
  });
</script>

<style lang="css" scoped></style>
