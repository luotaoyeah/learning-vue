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

  <fieldset>
    <legend>event-modifiers</legend>

    <!--可以只使用 event modifier, 而不绑定处理函数-->
    <button @click.prevent>CLICK ME</button>
  </fieldset>

  <fieldset>
    <legend>key-modifiers</legend>

    <!--
        任何合法的 KeyboardEvent.key 值都可以作为键盘事件的 modifier,
        注意, 要将 KeyboardEvent.key 转换为 kebab-case
    -->
    <input @keyup.escape="fn03('escape')" />

    <!--对于一些常用的键, vue 给他们设置了别名, 方便我们使用, 比如 escape 的别名为 esc-->
    <input @keyup.esc="fn03('esc')" />

    <!--
        .exact 跟控制键(ctrl/shift/alt/meat)一起使用,
        表示, 只有指定的控制键按下, 没有其他的控制键按下时, 才会触发事件,
        如下, 只有 shift 按下, ctrl/alt/meta 都没有按下时才会触发事件
    -->
    <input @keyup.shift.exact="fn04()" />
    <input @keyup.shift="fn05()" />
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

  function fn03(key: string) {
    console.log(key);
  }

  function fn04() {
    console.log('.exact');
  }

  function fn05() {
    console.log('without .exact');
  }
</script>

<style lang="css" scoped></style>
