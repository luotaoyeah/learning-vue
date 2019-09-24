<template>
  <div>
    <!--
       对于 DOM 标签，v-bind 默认情况下绑定的是标签的 attribute 属性
    -->
    <div v-bind:textContent="time">FOO</div>
    <hr />
    <!--
       对于 DOM 标签，如果要使用 v-bind 绑定 DOM 节点的 property 属性，
       而不是 DOM 标签的 attribute 属性，则需要使用 v-bind:attr.prop 的形式来绑定
    -->
    <div v-bind:textContent.prop="time">FOO</div>
    <hr />
    <!--
       vue@2.6 针对 v-bind:attr.prop 的形式添加了简单写法
    -->
    <div .textContent="time">FOO</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: new Date().toISOString(),
    };
  },
};
</script>
