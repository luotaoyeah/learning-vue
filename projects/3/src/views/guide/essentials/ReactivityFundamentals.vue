<template>
  <fieldset>
    <legend>deep-reactivity</legend>

    <div>{{ state.count }}</div>
    <button v-on:click="increment">++</button>

    <div>{{ state.arr }}</div>

    <button v-on:click="pushToArr">push</button>
  </fieldset>

  <fieldset>
    <legend>reactive-variables-with-ref</legend>

    <div>{{ ref01 }}</div>

    <button @click="ref01++">++</button>
  </fieldset>

  <fieldset>
    <legend>ref-unwrapping-in-templates</legend>

    <!--ref02 是一个 ref, 并且此时它是一个 top-level 属性, 因此自动解包(即省略 .value)-->
    <div>ref02.count: {{ ref02.count }}</div>

    <!--obj02.foo 是一个 ref, 但是通过 obj02.foo 来访问 foo, 表示 foo 此时不是一个 top-level 属性, 因此不能自动解包-->
    <div>obj02.foo.value.count: {{ obj02.foo.value.count }}</div>

    <!--此处的 reactive02.foo 虽然不是一个 top-level 的 ref, 但是因为它是 reactive 对象的属性, 因此自动解包-->
    <div>reactive02: {{ reactive02.foo.count }}</div>

    <button @click="ref02.count++">++</button>
  </fieldset>
</template>

<script lang="ts" setup>
  import { reactive, Ref, ref, UnwrapRef, watch } from 'vue';

  // http://localhost:8888/guide/essentials/reactivity-fundamentals

  const state = reactive({ count: 0, arr: [1, 2, 3] });

  function increment() {
    state.count++;
  }

  function pushToArr() {
    state.arr.push(state.arr.length + 1);
  }

  const obj01 = { x: 1 };

  // 对同一个对象 obj01 多次调用 reactive(), 返回的是同一个 proxy 对象
  console.assert(reactive(obj01) === reactive(obj01));

  // 对 proxy 调用 reactive(), 返回的依然是 proxy
  console.assert(reactive(obj01) === reactive(reactive(obj01)));
  console.assert(reactive(obj01) === reactive(reactive(reactive(reactive(obj01)))));

  watch(
    () => state.count,
    (newValue, oldValue) => {
      console.log(oldValue, newValue);
    },
  );

  // 把 proxy 的属性赋值给普通变量, 这个普通变量不是响应式的
  const count01 = state.count;
  watch(
    () => count01,
    (newValue, oldValue) => {
      console.log(`count01: ${oldValue},${newValue}`);
    },
  );

  // --------------------------------------------------

  const ref01: Ref<UnwrapRef<number>> = ref(1);
  watch(
    () => ref01.value,
    (newValue, oldValue) => {
      console.log(`ref01: ${oldValue},${newValue}`);
    },
  );

  // count02 不是响应式的
  const value01 = ref01.value;
  watch(
    () => value01,
    (newValue, oldValue) => {
      console.log(`value01: ${oldValue},${newValue}`);
    },
  );

  // --------------------------------------------------

  const ref02 = ref({ count: 0 });
  const obj02 = { foo: ref02 };

  // ref 作为 reactive 对象的属性时, 会自动解包
  // 但是如果 reactive 对象是一个 array/Map/Set, 则不会自动解包
  const reactive02 = reactive({ foo: ref02 });
  console.log(`reactive02.foo.count: ${reactive02.foo.count}`);
</script>

<style lang="css" scoped></style>
