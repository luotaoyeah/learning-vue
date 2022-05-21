<template>
  <fieldset>
    <legend>lifecycle-hooks</legend>

    <!--
        onMounted / onUnmounted 是子组件先执行,
        onBeforeMount / onBeforeUnmount 是父组件先执行
    -->
    <CompA v-if="visible">
      <CompB></CompB>
    </CompA>

    <button @click="visible = !visible">toggle CompA</button>
  </fieldset>
</template>

<script lang="ts" setup>
  import CompA from '@/components/CompA.vue';
  import CompB from '@/components/CompB.vue';
  import { ref } from 'vue';

  // http://localhost:8888/guide/essentials/lifecycle

  const visible = ref(true);
</script>

<style lang="css" scoped></style>
