<template>
  <fieldset>
    <legend>G</legend>

    <div>{{ String(tName) }}, {{ tAge }}</div>

    <div>tA: {{ tA }}</div>
    <div>tB: {{ String(tB) }}</div>
  </fieldset>
</template>

<script lang="ts" setup>
  // 直接通过泛型参数声明 props
  // defineProps<{ tName: string }>();

  // defineProps(['tName']);

  defineProps({
    tName: String,
    tAge: {
      type: Number,
      default: 18,
      validator(value: unknown): boolean {
        return (value as number) <= 20;
      },
    },

    // 类型为 Object 时, default 需要定义成一个 factory function
    tA: {
      type: Object,
      default(props: any) {
        console.log('props:', props);
        return { x: 1 };
      },
    },

    // Boolean 类型的 prop 的默认值为 false, 除非使用 default 指定了其他的默认值
    // 其他类型的 prop 的默认值为 undefined, 除非使用 default 指定了其他的默认值
    tB: {
      type: Boolean,
    },
  });
</script>

<style scoped></style>
