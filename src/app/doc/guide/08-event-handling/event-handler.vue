<template>
  <div>
    <h1>2. Method Event Handlers</h1>
    <p>
      <small>
        <i>
          在事件处理的逻辑比较复杂的时候， 把所有的逻辑代码都绑定到 v-on
          指令上不太现实； 我们可以将逻辑代码封装到一个方法中，
          并将方法绑定到指令上；注意，这儿是直接绑定的方法（方法名，不加圆括号对），
          而不是方法的执行结果（方法调用）；
        </i>
      </small>
    </p>
    <button v-on:click="handleClick">Click Me</button>
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
    handleClick(e) {
      this.counter += 1;

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
