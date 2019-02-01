<template>
  <div>
    <h1>5. Caveats</h1>
    <p>
      <small>
        <i>
          由于 JavaScript 的限制，有些对数组的操作无法被 vue 检测到；包括：
          <ol>
            <li>通过索引设置元素的值；</li>
            <li>修改数组的 length 属性；</li>
          </ol>
        </i>
      </small>
    </p>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
    <button @click="handle01">set with index</button>
    <button @click="handle02">modify the length</button>
    <p>
      <small>
        <i>
          对第一个问题的解决方法：
          <ol>
            <li>通过 Vue.set() 方法；</li>
            <li>通过 Array.prototype.splice() 方法；</li>
          </ol>
        </i>
      </small>
    </p>
    <button @click="handle03">Vue.set()</button>
    <button @click="handle04">Array.prototype.splice()</button>
    <p>
      <small>
        <i>
          对第二个问题的解决方法：
          <ol>
            <li>通过 Array.prototype.splice() 方法；</li>
          </ol>
        </i>
      </small>
    </p>
    <button @click="handle05">Array.prototype.splice()</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3]
    };
  },
  methods: {
    handle01() {
      this.items[0] = "tom";
    },
    handle02() {
      this.items.length = 2;
    },
    handle03() {
      this.$set(this.items, 0, "tom");
    },
    handle04() {
      this.items.splice(0, 1, "tom");
    },
    handle05() {
      this.items.splice(2);
    }
  }
};
</script>
