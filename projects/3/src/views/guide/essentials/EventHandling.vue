<template>
  <fieldset>
    <legend>listening-to-events</legend>

    <div>{{ foo }}, {{ bar }}</div>

    <!--1. 事件的绑定值可以是一段 js 代码(可以包含多条语句)-->
    <button
      @click="
        foo++;
        bar++;
      "
    >
      CLICK ME
    </button>

    <!--2. 事件的绑定值可以是一个方法(注意是方法名)-->
    <button @click="fn01">CLICK ME</button>

    <!--如下, 事件的绑定值是一个方法调用, 本质上是一段 js 代码, 属于第一类-->
    <button @click="fn01()">CLICK ME</button>
  </fieldset>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  // http://localhost:8888/guide/essentials/event-handling

  const foo = ref(0);
  const bar = ref(0);

  function fn01() {
    foo.value++;
    bar.value++;
  }
</script>

<style lang="css" scoped></style>
