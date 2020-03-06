<template>
  <div>
    <section>
      <Button>
        <span>{{ counter }}</span>
      </Button>
      <Button :style="{ marginLeft: '12px' }">
        <!------------------------------------------------------------------------------------------------------
            v-once 只绑定一次，后续不再更新
        ------------------------------------------------------------------------------------------------------->
        <span v-once>{{ counter }}</span>
      </Button>
    </section>

    <hr />

    <section>
      <Button>
        <span>{{ rawHtml }}</span>
      </Button>

      <Button :style="{ marginLeft: '12px' }">
        <!------------------------------------------------------------------------------------------------------
            v-text 将属性值当成普通文本进行解析
        ------------------------------------------------------------------------------------------------------->
        <span v-text="rawHtml"></span>
      </Button>

      <Button :style="{ marginLeft: '12px' }">
        <!------------------------------------------------------------------------------------------------------
            v-html 将属性值当成 HTML 代码进行解析
        ------------------------------------------------------------------------------------------------------->
        <span v-html="rawHtml"></span>
      </Button>
    </section>

    <hr />

    <section>
      <Button v-bind:title="title">{{ title }}</Button>

      <!------------------------------------------------------------------------------------------------------
          对于类型为 boolean 的 attribute，比如 disabled，当它绑定的属性值为 falsy 时，整个 attribute 都会被移除：
          对于 `<button v-bind:disabled="value"></button>`，
          当 value 为 trusy 时，结果为 `<button disabled></button>`，
          当 value 为 falsy 时，结果为 `<button></button>`，
      ------------------------------------------------------------------------------------------------------->
      <Button
        :style="{ marginLeft: '12px' }"
        v-bind:disabled="isDisabled"
        v-bind:title="String(isDisabled)"
        v-on:click="onClick"
      >
        {{ String(isDisabled) }}
      </Button>
    </section>

    <hr />
    <section>
      <!------------------------------------------------------------------------------------------------------
          {{}} 中可以是任意的 js expression，但只能是一个 expression，不能是多个
      ------------------------------------------------------------------------------------------------------->
      <Button>{{ 'abc'.toUpperCase().split('').reverse().join('') }}</Button>
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/template-syntax.html#interpolations

import { Button } from 'ant-design-vue';

export default {
  components: {
    Button,
  },
  data() {
    return {
      counter: 1,
      rawHtml: `<span style="color:red;">HTML</span>`,
      title: 'TITLE',
      isDisabled: false,
    };
  },
  mounted() {
    const timer = setInterval(() => {
      this.counter += 1;
      if (this.counter === 9) {
        clearInterval(timer);
      }
    }, 1000);
  },
  methods: {
    onClick() {
      this.isDisabled = true;
    },
  },
};
</script>
