<template>
  <fieldset>
    <legend>text-interpolation</legend>

    <div>{{ msg }}</div>
  </fieldset>

  <fieldset>
    <legend>raw-html</legend>

    <div>{{ rawHtml }}</div>
    <div v-html="rawHtml"></div>
  </fieldset>

  <fieldset>
    <legend>attribute-bindings</legend>

    <div v-bind:data-foo="msg">1</div>

    <!--绑定值为 null/undefined 时, 属性会被移除-->
    <div :data-foo="msg" :data-bar="null" :data-baz="undefined">2</div>

    <!--对于 boolean attribute, 空字符串会被当成 truthy 值-->
    <button :disabled="''">button</button>

    <!--v-bind 后面不加 :some-attr, 表示同时绑定多个属性-->
    <div v-bind="attrs01" :data-baz="3">3</div>
  </fieldset>

  <fieldset>
    <legend>using-javascript-expressions</legend>

    <!--mustache 和 v-bind 的绑定值可以是任意合法的表达式-->
    <!--例如, IIFE 也是表达式-->
    <div>
      {{
        (function () {
          return 'HELLO';
        })()
      }}

      <!--可访问的全局对象是受限的, 但是可以通过 app.config.globalProperties.xxx 自行扩展-->
      {{ (() => Date.now())() }}
      {{
        (() => {
          $log('FOO');
          return '';
        })()
      }}
    </div>
  </fieldset>

  <fieldset>
    <legend>directives</legend>

    <!--directive 的 argument 可以是动态绑定的-->
    <div :[attr01]="6">FOO</div>

    <!--如果 argument 的绑定值为 null, 表示移除这个 directive（这儿的 directive 指的是 v-bind）-->
    <div :[null]="6">BAR</div>
  </fieldset>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// http://localhost:8888/guide/essentials/template-syntax

const msg = ref('HELLO WORLD');

const rawHtml = ref<string>("<span style='color:red;'>红色</span>");

const attrs01 = ref({
  'data-foo': 1,
  'data-bar': 2,
});

const attr01 = 'data-foo';
</script>

<style scoped></style>
