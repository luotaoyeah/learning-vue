<template>
  <div>
    <h1>4. Array Change Detection</h1>
    <h2>4.1.</h2>
    <p>
      <small>
        <i>
          vue 对常用的数组操作方法提供了一层包装，从而在使用这些方法操作数组的时候，
          可以触发视图更新；这些方法包括：
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
      <li
        v-for="item in items"
        :key="item"
      >{{item}}
      </li>
    </ul>
    <button @click="handlePush">push</button>
    <button @click="handlePop">pop</button>
    <button @click="handleUnshift">unshift</button>
    <button @click="handleShift">shift</button>
    <button @click="handleSplice">splice</button>
    <button @click="handleSort">sort</button>
    <button @click="handleReverse">reverse</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [2, 1, 3]
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
    }
  }
};
</script>
<style scoped>
</style>
