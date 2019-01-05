<template>
  <div>
    <h2>Passing Attributes and Events to child Elements</h2>
    <ul>
      <li>
        对于普通组件， 组件元素上没有被定义为 props 的属性，
        都会被添加到组件模板的根元素上； 对于同名属性，
        组件根元素上的属性会覆盖组件元素上的属性； 同时， 对于 class 和 style
        会自动进行合适的合并；
      </li>
      <li>
        对于函数组件， 必须手动进行这些操作， 包括属性的绑定， 以及事件的绑定；
        简单来讲， 直接将 context.data 作为第二个参数， 传递给 createElement()
        方法；
      </li>
      <li>
        如果是使用的模板（而不是渲染函数）， 可以通过 v-bind="data.attrs" 和
        v-on="listeners" 实现传递；
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped></style>
