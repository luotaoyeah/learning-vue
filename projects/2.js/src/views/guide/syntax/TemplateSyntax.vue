<template>
  <div>
    <fieldset>
      <legend>Raw HTML</legend>

      <span v-html="rawHtml"></span>
    </fieldset>

    <fieldset>
      <legend>Dynamic Arguments</legend>

      <div v-bind:title="'HTML'">v-bind:title="'HTML'"</div>

      <p>指令 (directive) 的参数 (argument) 可以是动态绑定的, 用方括号 [] 包裹</p>
      <div v-bind:[arg1]="'HTML'">v-bind:[arg1]="'HTML'"</div>
    </fieldset>

    <fieldset>
      <legend>Modifiers</legend>

      <p>directive 的 modifier</p>

      <p>
        <a href="https://www.github.com" v-on:click.prevent="onClick">https://www.github.com</a>
      </p>
    </fieldset>

    <fieldset>
      <legend>Shorthands</legend>

      <p>v-bind 和 v-on 的简写方式</p>

      <p>
        <button v-bind:title="'000'">v-bind:title="'000'"</button>
        <button :title="'000'">:title="'000'"</button>
        <button :[arg1]="'000'">:[arg1]="'000'"</button>
      </p>

      <p>
        <button v-on:click="onClick">v-on:click="onClick"</button>
        <button @click="onClick">@click="onClick"</button>
        <button @[arg2]="onClick">@[arg2]="onClick"</button>
      </p>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'TemplateSyntax',
  data() {
    return {
      /**
       * @type { string }
       */
      rawHtml: '<span style="color: red;">v-html</span>',
      /**
       * @type { string }
       */
      arg1: 'title',
      /**
       * @type { string }
       */
      arg2: 'click',
    };
  },
  methods: {
    /**
     * @returns { void }
     */
    onClick() {
      alert('hi~');
    },
  },
};
</script>

<style scoped></style>
