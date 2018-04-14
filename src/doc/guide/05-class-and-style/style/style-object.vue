<template>
  <div>
    <h1>2. Object Syntax</h1>
    <h2>2.1. </h2>
    <p>
      <small>
        <i>
          :style 绑定对象的时候，该对象就是 CSS 的对象形式，即：属性名是样式名，属性值是样式值；
        </i>
      </small>
    </p>
    <p :style="{color: 'red', fontSize: '18px'}">
      :style="{color: 'red', fontSize: '18px'}"
    </p>
    <h2>2.2. </h2>
    <p>
      <small>
        <i>
          对象的属性名可以是 camelCase 也可以是 kebab-case；
        </i>
      </small>
    </p>
    <p :style="styleObj">:style="styleObj"</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      styleObj: {
        color: "red",
        "font-size": "18px"
      }
    };
  }
};
</script>
<style scoped>
</style>
