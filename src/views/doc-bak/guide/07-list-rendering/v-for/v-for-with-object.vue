<template>
  <div>
    <h1>2. v-for with an Object</h1>
    <h2>2.1.</h2>
    <p>
      <small>
        <i>
          可以使用 v-for 来迭代一个对象的属性； 表达式支持三个参数：'属性值'，'属性名'，'索引'；
        </i>
      </small>
    </p>
    <ul>
      <li v-for="(value, key, index) of person" :key="key">{{ index }}. {{ key }}: {{ value }}</li>
    </ul>
    <h2>2.2.</h2>
    <p>
      <small>
        <i>
          属性的迭代顺序是由 Object.keys() 返回的顺序决定的， 对于不同的 JavaScript 引擎，不能保证顺序的一致性；
        </i>
      </small>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {
        name: "tom",
        age: 18,
      },
    };
  },
};
</script>
