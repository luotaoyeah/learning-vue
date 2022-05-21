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

  <fieldset>
    <legend>accessing-event-argument-in-inline-handlers</legend>

    <!--
        事件的绑定值是一段代码时, 如何访问事件参数?
          1. 使用特殊变量 $event
          2. 外面包一个箭头函数, 用箭头函数来接收事件参数
    -->
    <button @click="fn02('foo', $event)">CLICK ME</button>
    <button @click="(event) => fn02('bar', event)">CLICK ME</button>
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

  function fn02(message: string, event: MouseEvent) {
    console.log(`${event.type}, ${message}`);
  }
</script>

<style lang="css" scoped></style>
