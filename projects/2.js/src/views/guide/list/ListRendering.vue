<template>
  <div>
    <fieldset>
      <legend>使用 v-for 遍历一个 object.</legend>

      <ul>
        <li v-for="(value, key, index) in obj01">[{{ index }}] [{{ key }}] [{{ value }}]</li>
      </ul>
    </fieldset>

    <fieldset>
      <legend>Array Change Detection</legend>

      <p>vue 对下面这些直接修改 array 的方法进行了包装, 从而可以监测到对 array 的修改.</p>

      <p>
        <button @click="push()">push()</button>
      </p>
      <p>
        <button @click="pop()">pop()</button>
      </p>
      <p>
        <button @click="shift()">shift()</button>
      </p>
      <p>
        <button @click="unshift()">unshift()</button>
      </p>
      <p>
        <button @click="reverse()">reverse()</button>
      </p>

      <ul>
        <li v-for="value in items01" :key="value">{{ value }}</li>
      </ul>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'ListRendering',
  data() {
    return {
      obj01: {
        x: 'X',
        y: 'Y',
        z: 'Z',
      },
      items01: [1, 2, 3],
    };
  },
  methods: {
    push() {
      this.items01.push(this.items01[this.items01.length - 1] + 1);
    },
    pop() {
      this.items01.pop();
    },
    shift() {
      this.items01.shift();
    },
    unshift() {
      this.items01.unshift(this.items01[0] - 1);
    },
    reverse() {
      this.items01.reverse();
    },
  },
};
</script>

<style scoped></style>
