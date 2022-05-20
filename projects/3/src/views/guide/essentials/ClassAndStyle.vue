<template>
  <fieldset>
    <legend>binding-html-classes</legend>

    <!--绑定一个普通的字符串-->
    <div :class="'foo bar'">foo bar</div>

    <!--绑定一个对象, 每个属性名表示一个类名, 每个属性值表示是否添加这个类名-->
    <div :class="{ foo: true, bar: true, baz: false }">foo bar</div>

    <!--绑定一个数组, 每个元素表示一个类名, 元素也可以是一个对象, 该对象用法跟上面绑定对象一样-->
    <div :class="['foo', 'bar', { baz: false }]">foo bar</div>

    <!--:class 和 class 可以共存, 并且先后顺序没有影响, 因为 class 中的多个类名的顺序没有影响-->
    <div :class="{ bar: true }" class="foo">foo bar</div>
  </fieldset>

  <fieldset>
    <legend>binding-inline-styles</legend>

    <!--绑定一个对象-->
    <div :style="{ color: 'red' }">A</div>

    <!--对象的属性名使用 camelCase 或者 kebab-case 都可以-->
    <div :style="{ borderColor: 'red', borderStyle: 'solid', 'border-width': '1px', 'border-radius': '3px', padding: '3px' }">B</div>

    <!--绑定一个数组, 每个元素是一个对象-->
    <div :style="[{ color: 'red' }, { fontSize: '20px' }]">C</div>

    <!--:style 和 style 可以共存, 但是先后顺序会有影响-->
    <div :style="{ color: 'red' }" style="color: blue">D</div>
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
