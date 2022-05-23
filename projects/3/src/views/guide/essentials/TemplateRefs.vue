<template>
  <fieldset>
    <legend>template-refs</legend>

    <div ref="div01">A</div>
  </fieldset>

  <fieldset>
    <legend>function-refs</legend>

    <div>
      <p><input v-if="visible" :ref="setRef01" type="text" /></p>
      <button @click="visible = !visible">toggle</button>
    </div>
  </fieldset>

  <fieldset>
    <legend>ref-on-component</legend>

    <div>
      <CompC ref="compCRef"></CompC>
    </div>
  </fieldset>
</template>

<script lang="ts" setup>
  // http://localhost:8888/guide/essentials/template-refs
  import { ref, watch } from 'vue';
  import CompC from '@/components/CompC.vue';

  const div01 = ref<HTMLDivElement | null>(null);

  watch(div01, (newValue, oldValue) => {
    console.log(`div01:`, newValue);
  });

  // --------------------------------------------------
  const visible = ref<boolean>(true);

  // :ref 可以绑定一个函数, 函数第一个参数就是元素的实例对象,
  function setRef01(el: any | null) {
    console.log('el:', el);
  }

  // --------------------------------------------------
  const compCRef = ref<InstanceType<typeof CompC> | null>(null);
  watch(compCRef, (newValue, oldValue) => {
    console.log(`compCRef: { x: ${newValue?.x}, y: ${newValue?.y} }`);
  });
</script>

<style lang="css" scoped></style>
