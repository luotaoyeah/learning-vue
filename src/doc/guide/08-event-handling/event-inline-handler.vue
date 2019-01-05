<template>
  <div>
    <h1>3. Method in Inline Handlers</h1>
    <h2>3.1.</h2>
    <p>
      <small>
        <i>
          因为 v-on 可以绑定 JavaScript 代码， 所以方法的调用语句也可以绑定到
          v-on 指令上；
        </i>
      </small>
    </p>
    <button v-on:click="handleClick()">Click Me</button>
    <p>You clicked the button {{ counter }} times.</p>
    <h2>3.2.</h2>
    <p>
      <small>
        <i>
          在调用方法时，可以传入一个特殊的变量 $event， 代表原生的 DOM
          事件对象； 也可以通过 arguments[0] 拿到事件对象，作为参数传入；
        </i>
      </small>
    </p>
    <button v-on:click="handleClick($event)">Click Me（$event）</button>
    <button v-on:click="handleClick(arguments[0])">
      Click Me（arguments[0]）
    </button>
    <p>You clicked the button {{ counter }} times.</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    async handleClick(e) {
      this.counter += 1;
      await this.$nextTick();

      /**
       * 这儿的事件参数 e 是原生的 DOM 事件对象；
       */
      if (e) {
        alert(e.target.tagName);
      }
    }
  }
};
</script>
<style scoped></style>
