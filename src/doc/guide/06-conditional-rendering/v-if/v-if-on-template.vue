<template>
  <div>
    <h1>1. v-if</h1>
    <h2>1.1.</h2>
    <p>
      <small> <i> v-if 指令用来控制是否渲染某个元素； </i> </small>
    </p>
    <p v-if="active">toggle rendering this element</p>
    <h2>1.2.</h2>
    <p>
      <small>
        <i>
          如果需要同时控制多个元素是否渲染，可以用 template
          将多个元素包裹起来，然后在 template 上绑定 v-if；
          最终的渲染结果中不会包含这个 template；
        </i>
      </small>
    </p>
    <template v-if="active">
      <p>hello</p>
      <p>world</p>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true
    };
  }
};
</script>
