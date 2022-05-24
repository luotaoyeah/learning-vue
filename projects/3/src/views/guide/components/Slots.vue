<template>
  <fieldset>
    <legend>named-slots</legend>

    <CompM>
      <template #default>BAR</template>
    </CompM>
  </fieldset>

  <fieldset>
    <legend>scoped-slots</legend>

    <CompM v-slot="{ foo, bar }">{{ foo }} {{ bar }}</CompM>

    <CompM>
      <template #default="{ foo, bar }">{{ foo }} {{ bar }}</template>
    </CompM>
  </fieldset>
</template>

<script lang="ts" setup>
  // http://localhost:8888/guide/components/slots
  import CompM from '@/components/CompM.vue';
</script>

<style lang="css" scoped></style>
