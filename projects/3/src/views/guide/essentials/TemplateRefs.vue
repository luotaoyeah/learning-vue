<template>
  <fieldset>
    <legend>template-refs</legend>

    <div ref="div01">A</div>
  </fieldset>

  <fieldset>
    <legend>function-refs</legend>

    <div>
      <p><input v-if="visible" type="text" :ref="setRef01" /></p>
      <button @click="visible = !visible">toggle</button>
    </div>
  </fieldset>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';

  // http://localhost:8888/guide/essentials/template-refs

  const div01 = ref<HTMLDivElement | null>(null);

  watch(div01, (newValue, oldValue) => {
    console.log(`div01:`, newValue);
  });

  // --------------------------------------------------
  const visible = ref<boolean>(true);

  // :ref 可以绑定一个函数, 函数第一个参数就是元素的实例对象,
  function setRef01(el: HTMLInputElement | null) {
    console.log('el:', el);
  }
</script>

<style lang="css" scoped></style>
