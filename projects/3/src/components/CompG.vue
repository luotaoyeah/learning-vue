<template>
  <fieldset>
    <legend>G</legend>

    <div>{{ tName }}, {{ tAge }}</div>
  </fieldset>
</template>

<script lang="ts" setup>
  // 直接通过泛型参数声明 props
  // defineProps<{ tName: string }>();

  // defineProps(['tName']);

  defineProps({
    /** 姓名. */
    tName: String,
    /** 年龄. */
    tAge: {
      type: Number,
      required: true,
      default: 18,
    },
  });
</script>

<style scoped></style>
