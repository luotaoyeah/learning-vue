<template>
  <fieldset>
    <legend>basic-example</legend>

    <div>
      <p>x: {{ x }}</p>
      <p>y: {{ y }}</p>
      <button @click="x++">x++</button>
      <button @click="y++">y++</button>
    </div>

    <hr />

    <div>
      <p>reactive01.x: {{ reactive01.x }}</p>

      <button @click="reactive01.x++">++</button>
    </div>
  </fieldset>
</template>

<script lang="ts" setup>
  import { reactive, ref, watch } from 'vue';

  // http://localhost:8888/guide/essentials/watchers

  const x = ref(0);
  const y = ref(0);
  // 被监视的数据是一个 getter, 类似于 computed
  watch(
    () => x.value + y.value,
    (newValue, oldValue) => {
      console.log(`x + y: ${oldValue}, ${newValue}`);
    },
  );

  // --------------------------------------------------
  // 同时监视多个数据, 任何一个数据变更, 都会触发回调函数
  watch([x, y], (newValue, oldValue) => {
    console.log(`[x, y]: ${oldValue}, ${newValue}`);
  });

  // --------------------------------------------------
  const reactive01 = reactive({ x: 0 });
  watch(reactive01, (newValue, oldValue) => {
    // 直接监视一个 reactive 对象, 回调函数中的参数 newValue 和 oldValue 始终是相等的, 就等于这个 reactive 对象
    console.assert(newValue === oldValue);
    console.log(`${oldValue.x}, ${newValue.x}`);
  });

  // 不能直接监视一个 reactive 对象的属性, 需要使用 getter 的形式来实现
  watch(
    () => reactive01.x,
    (newValue, oldValue) => {
      console.log(`${oldValue}, ${newValue}`);
    },
  );
</script>

<style lang="css" scoped></style>
