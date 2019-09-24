<template>
  <div>
    <h1>3. Key</h1>
    <h2>3.1.</h2>
    <p>
      <small>
        <i>
          使用 v-for 的时候，我们通常应该同时使用 key 来指定元素的唯一标识， 以便 vue 可以更好的追踪和重用元素；
        </i>
      </small>
    </p>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3],
    };
  },
};
</script>
