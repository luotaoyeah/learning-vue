<template>
  <div>
    <p>使用 v-for 的时候应该始终声明 key 属性；</p>
    <ul>
      <li>
        在组件上使用 v-for 的时候必须同时声明 key， 为了可维护性，
        为了行为可预测， 在普通元素上使用 v-for 时， 也应该同时声明 key；
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
