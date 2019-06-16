<template>
  <div>
    <h1>1. Listening toEvents</h1>
    <p>
      <small>
        <i>
          我们可以使用 v-on 指令来监听 DOM 事件，
          指令绑定的值就是在事件触发时，想要执行的 JavaScript 代码；
        </i>
      </small>
    </p>
    <button v-on:click="counter += 1">Click Me</button>
    <p>You clicked the button {{ counter }} times.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  }
};
</script>
