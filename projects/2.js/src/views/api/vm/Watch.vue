<template>
  <div>
    <fieldset>
      <legend>vm.$watch()</legend>

      <p>
        <input v-model="a.b.c" type="text" />
      </p>
    </fieldset>
  </div>
</template>

<script>
/**
 * @typedef { {b: { c: string }} } A
 */
export default {
  name: 'Watch',
  data() {
    return {
      /**
       * @type { A }
       */
      a: {
        b: {
          c: '1',
        },
      },
    };
  },
  mounted() {
    // 监视某个 data 数据, 参数为'属性路径(keypath)'
    this.$watch(
      'a.b.c',
      /**
       *
       * @param { string } newValue
       * @param { string } oldValue
       */
      (newValue, oldValue) => {
        console.log(`000: 旧值:[${oldValue}], 新值:[${newValue}]`);
      },
    );

    // 参数是一个类似于 computed property 的函数,
    // 类似于监视一个 computed property, 但是我们并没有声明一个 computed property
    this.$watch(
      () => this.a.b.c,
      /**
       *
       * @param { string } newValue
       * @param { string } oldValue
       */
      (newValue, oldValue) => {
        console.log(`111: 旧值:[${oldValue}], 新值:[${newValue}]`);
      },
    );

    // 如果要监视一个对象的底层属性的变更, 需要使用配置选项 deep, 因为对象的引用始终没有变更.
    // 回调函数的参数中, 新值和旧值是一样的, 都指向变更后的对象.
    this.$watch(
      'a',
      /**
       *
       * @param { A } newValue
       * @param { A } oldValue
       */
      (newValue, oldValue) => {
        console.assert(newValue === oldValue);
        console.assert(newValue === this.a);
        console.log(`222: 旧值:[${oldValue.b.c}], 新值:[${newValue.b.c}]`);
      },
      { deep: true },
    );

    // 配置选项 immediate 表示: 使用被监视的数据的当前值, 立即触发一次回调函数.
    this.$watch(
      'a.b.c',
      (newValue, oldValue) => {
        console.assert(oldValue === undefined);
        console.log(`333: 旧值:[${oldValue}], 新值:[${newValue}]`);
      },
      { immediate: true },
    );
  },
};
</script>

<style scoped></style>
