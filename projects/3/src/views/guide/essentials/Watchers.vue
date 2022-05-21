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

  <fieldset>
    <legend>deep-watchers</legend>

    <div>
      <button @click="reactive02.x++">reactive02.x++</button>
      <button @click="ref01++">ref01++</button>
      <button @click="ref02.x++">ref02.x++</button>
    </div>
  </fieldset>

  <fieldset>
    <legend>eager-watchers</legend>

    <div>
      <button @click="ref03++">++</button>
    </div>
  </fieldset>

  <fieldset>
    <legend>watcheffect</legend>

    <div>
      <button @click="ref04++">++</button>
    </div>
  </fieldset>
</template>

<script lang="ts" setup>
  import { reactive, ref, watch, watchEffect } from 'vue';

  // http://localhost:8888/guide/essentials/watchers

  const x = ref(0);
  const y = ref(0);
  // 被监视的是一个 getter, 类似于 computed
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

  // 不能直接监视 reactive 对象的属性, 需要使用 getter 的形式来监视
  watch(
    () => reactive01.x,
    (newValue, oldValue) => {
      console.log(`${oldValue}, ${newValue}`);
    },
  );

  // --------------------------------------------------
  const reactive02 = reactive({ x: 0 });

  // 被监视的是 reactive 对象, 则默认为 deep 监视
  watch(reactive02, (newValue, oldValue) => {
    console.assert(newValue === oldValue);
    console.log(`reactive02: %c${oldValue.x}, ${newValue.x}`, 'color:red');
  });

  // 被监视的是 getter, 且 getter 返回的是一个对象, 则默认不是 deep 监视
  watch(
    () => reactive02,
    (newValue, oldValue) => {
      console.assert(newValue === oldValue);
      console.log(`reactive02: %c${oldValue.x}, ${newValue.x}`, 'color:blue');
    },
    { deep: true },
  );

  // 被监视的是 getter, 但 getter 返回的是一个原始类型, 则不需要关心 deep 问题
  watch(
    () => reactive02.x,
    (newValue, oldValue) => {
      console.log(`reactive02.x: %c${oldValue}, ${newValue}`, 'color:blue');
    },
  );

  // 被监视的是 ref, 但该 ref 是一个原始类型, 则不需要关心 deep 问题
  const ref01 = ref(0);
  watch(ref01, (newValue, oldValue) => {
    console.log(`ref01: %c${oldValue}, ${newValue}`, 'color:green');
  });

  const ref02 = ref({ x: 0 });
  // 被监视的是 ref, 且该 ref 是一个对象, 则默认不是 deep 监视
  watch(
    ref02,
    (newValue, oldValue) => {
      console.assert(newValue === oldValue);
      console.log(`ref02: %c${oldValue.x}, ${newValue.x}`, 'color:green');
    },
    { deep: true },
  );

  // 被监视的是 ref.value, 由于 ref.value 是一个 reactive 对象, 因此默认是 deep 监视
  watch(ref02.value, (newValue, oldValue) => {
    console.assert(newValue === oldValue);
    console.log(`ref02.value: %c${oldValue.x}, ${newValue.x}`, 'color:green');
  });

  // --------------------------------------------------
  // immediate: ture 表示对数据的初始值触发一次回调函数
  const ref03 = ref(0);
  watch(ref03, (newValue, oldValue) => {
    console.log(`ref03: ${oldValue}, ${newValue}`);
  });
  watch(
    ref03,
    (newValue, oldValue) => {
      console.log(`ref03.immediate: ${oldValue}, ${newValue}`);
    },
    { immediate: true },
  );

  // --------------------------------------------------
  const ref04 = ref(0);
  watch(
    ref04,
    () => {
      console.log(`ref04: ${ref04.value}`);
    },
    { immediate: true },
  );
  // 满足下面两个条件时, 可以使用 watchEffect 替换 watch, 因此 watchEffect 是 watch 的语法糖:
  //   1. '被监视的响应式数据'和回调函数中'依赖的所有响应式数据'完全一样
  //   2. 设置了 immediate: true
  watchEffect(() => {
    console.log(`ref04.watchEffect: ${ref04.value}`);
  });
</script>

<style lang="css" scoped></style>
