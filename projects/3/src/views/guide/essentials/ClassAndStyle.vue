<template>
  <fieldset>
    <legend>binding-html-classes</legend>

    <!--绑定一个普通的字符串-->
    <div :class="'foo bar'">foo bar</div>

    <!--绑定一个对象, 每个属性名表示一个类名, 每个属性值表示是否添加这个类名-->
    <div :class="{ foo: true, bar: true, baz: false }">foo bar</div>

    <!--绑定一个数组, 每个元素表示一个类名, 元素也可以是一个对象, 该对象用法跟上面绑定对象一样-->
    <div :class="['foo', 'bar', { baz: false }]">foo bar</div>

    <!--:class 和 class 可以共存-->
    <div :class="{ bar: true }" class="foo">foo bar</div>
  </fieldset>
</template>

<script lang="ts" setup>
  // http://localhost:8888/guide/essentials/class-and-style
</script>

<style lang="css" scoped>
  div.foo {
    color: red;
  }

  div.bar {
    color: blue;
  }
</style>
