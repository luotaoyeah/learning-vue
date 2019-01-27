<template>
  <div>
    <ul>
      <li>
        监听一个表达式， 表达式表示数据对象的属性路径；
        <p><ElInputNumber v-model="x" /></p>
      </li>
      <li>
        监听一个计算函数（类似计算属性）；
        <p><ElInputNumber v-model="y" /></p>
      </li>
      <li>
        vm.$watch() 返回一个 unwatch 函数， 执行 unwatch 函数，
        终止监听函数的触发；
        <p><ElButton @click="handleClick01">unwatch vm.x</ElButton></p>
      </li>
      <li>
        设置 deep 选项， 监听对象的嵌套属性；
        <p><ElInput v-model="person.name" /></p>
      </li>
      <li>
        设置 immediate 选项， 会使用当前值立即触发一次监听函数；
        <p><ElInputNumber v-model="z" /></p>
      </li>
      <li>
        监听对象时， 如果变更的是对象的属性（而不是对象本身），
        则监听函数的两个参数一样；
        <ElInputNumber v-model="student.age" />
      </li>
    </ul>
  </div>
</template>
<script>
import _ from "lodash";

export default {
  data() {
    return {
      unwatch: null,
      x: 1,
      y: 2,
      z: 3,
      person: { name: "tom" },
      student: { age: 18 }
    };
  },
  created() {
    const vm = this;
    vm.unwatch = vm.$watch("x", (newValue, oldValue) => {
      console.log("x:", newValue, oldValue);
    });

    vm.$watch(
      () => {
        return vm.x + vm.y;
      },
      (newValue, oldValue) => {
        console.log("x + y:", newValue, oldValue);
      }
    );

    vm.$watch(
      "person",
      (newValue, oldValue) => {
        console.log("person:", newValue, oldValue);
      },
      { deep: true }
    );

    vm.$watch(
      "z",
      (newValue, oldValue) => {
        console.log("z:", newValue, oldValue);
      },
      { immediate: true }
    );

    vm.$watch(
      "student",
      (newValue, oldValue) => {
        console.log("student:", newValue === oldValue);
      },
      { deep: true }
    );
  },
  methods: {
    handleClick01() {
      const vm = this;
      if (!vm.unwatch) {
        return;
      }
      if (_.isFunction(vm.unwatch)) {
        vm.unwatch();
      }
    }
  },
  components: {}
};
</script>
