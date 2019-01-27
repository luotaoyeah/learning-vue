<template>
  <div>
    <h1>9. v-for on a template</h1>
    <p>
      <small>
        <i> v-for 可以直接在 template 元素上使用，用来同时渲染多个元素； </i>
      </small>
    </p>
    <template v-for="item in 10">
      <span :key="'span_' + item">{{ item }}:</span>
      <span :key="'i_' + item">
        <i>{{ item }},</i>
      </span>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
