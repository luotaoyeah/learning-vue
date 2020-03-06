<template>
  <fieldset>
    <my-fieldset>
      <!------------------------------------------------------------------------------------------------------
          v-slot 指令必须跟 template 一起使用，用来指定要往哪个 slot 插入，
      ------------------------------------------------------------------------------------------------------->
      <template v-slot:default>内容</template>
      <template v-slot:legend>标题</template>
    </my-fieldset>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-slots.html#named-slots

import comp01 from './named-slots.01.vue';

export default {
  components: {
    'my-fieldset': comp01,
  },
};
</script>
