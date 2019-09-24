<template>
  <div>
    <h1>3. Attributes</h1>
    <h2>3.1. v-bind</h2>
    <small> <i>使用 v-bind 来绑定 HTML 标签属性；</i> </small>
    <p v-bind:title="title">
      I have a title of <i>{{ title }}</i>
    </p>
    <h2>3.2. bool attribute</h2>
    <small>
      <i>
        有些 HTML 属性，不管属性值是什么，只要属性存在就表示属性生效，如：disabled； 这时候通过 v-bind
        绑定属性值，如果属性值为 null，undefined，false 时，则最终渲染的 HTML 中会移除这个属性；
      </i>
    </small>
    <p><button v-bind:disabled="isButtonDisabled">Button</button></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "hello world",
      isButtonDisabled: false,
    };
  },
};
</script>
