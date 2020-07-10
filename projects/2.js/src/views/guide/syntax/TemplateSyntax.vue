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
  </div>
</template>

<script>
export default {
  name: 'TemplateSyntax',
  data() {
    return {
      rawHtml: '<span style="color: red;">v-html</span>',
      arg1: 'title',
    };
  },
};
</script>

<style scoped></style>
