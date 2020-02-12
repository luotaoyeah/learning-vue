<template>
  <div>
    <section>
      <!------------------------------------------------------------------------------------------------------
          当多个组件需要同时应用 v-if 时，可以使用 template 包裹，template 不会渲染到页面
      ------------------------------------------------------------------------------------------------------->
      <template v-if="isVisible">
        <span>a</span>
        <span>b</span>
      </template>
      <template v-if="!isVisible">
        <span>c</span>
        <span>d</span>
      </template>
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/conditional.html#conditional-groups-with-v-if-on-template

export default {
  data() {
    return {
      isVisible: true,
    };
  },
};
</script>
