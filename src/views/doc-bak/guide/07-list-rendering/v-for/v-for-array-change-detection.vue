<template>
  <div>
    <h1>4. Array Change Detection</h1>
    <h2>4.1. Mutation Methods</h2>
    <p>
      <small>
        <i>
          vue 对常用的数组操作方法提供了一层包装，从而在使用这些方法操作数组的时候， 可以触发视图更新；这些方法包括：
          <ul>
            <li>push</li>
            <li>pop</li>
            <li>shift</li>
            <li>unshift</li>
            <li>splice</li>
            <li>sort</li>
            <li>reverse</li>
          </ul>
        </i>
      </small>
    </p>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
    <button @click="handlePush">push</button>
    <button @click="handlePop">pop</button>
    <button @click="handleUnshift">unshift</button>
    <button @click="handleShift">shift</button>
    <button @click="handleSplice">splice</button>
    <button @click="handleSort">sort</button>
    <button @click="handleReverse">reverse</button>
    <h2>4.2. Replacing an Array</h2>
    <p>
      <small>
        <i>
          有些操作数组的方法不会改变原来的数组，而是会返回一个新的数组，例如: filter，concat，slice；
          使用这些方法的时候，可以通过'将返回的新数组重新赋值给变量'的方式，来触发视图更新；
          使用重新赋值的方式，不会重新渲染所有列表元素，而是会尽可能的重用列表元素；
        </i>
      </small>
    </p>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
    <button @click="handleFilter">filter</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [2, 1, 3],
    };
  },
  methods: {
    handlePush() {
      this.items.push(4);
    },
    handlePop() {
      this.items.pop();
    },
    handleShift() {
      this.items.shift();
    },
    handleUnshift() {
      this.items.unshift(5);
    },
    handleSplice() {
      this.items.splice(1, 1);
    },
    handleSort() {
      this.items.sort((a, b) => a - b);
    },
    handleReverse() {
      this.items.reverse();
    },
    handleFilter() {
      this.items = this.items.filter(item => item > 2);
    },
  },
};
</script>
