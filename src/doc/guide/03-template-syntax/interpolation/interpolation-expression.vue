<template>
  <div>
    <h1>4. Using Javascript Expressions</h1>
    <p>
      <small>
        <i>所有数据绑定的地方都可以使用表达式，而不仅仅是属性值；</i>
      </small>
    </p>
    <p>number：{{ number }}</p>
    <p>number + 1：{{ number + 1 }}</p>
    <p>message：{{ message }}</p>
    <p>
      reversed message：{{
        message
          .split("")
          .reverse()
          .join("")
      }}
    </p>
    <p
      v-bind:title="
        message
          .split('')
          .reverse()
          .join('')
      "
    >
      reversed message as title attribute.
    </p>
    <p>
      <small>
        <i
          >每个数据绑定最多只能包含一个表达式，不能有多个表达式，也不能使用语句；</i
        >
      </small>
    </p>
    <p>
      <small>
        <i
          >表达式中只能使用有限的一组全局变量，如：Date，Math；不能随意访问用户自定义的全局变量；</i
        >
      </small>
    </p>
    <p>MyGolbalVar：{{ MyGolbalVar }}</p>
    <p>Date.now()：{{ Date.now() }}</p>
    <p>Math.LN10：{{ Math.LN10 }}</p>
  </div>
</template>

<script>
window.MyGolbalVar = "MyGolbalVar";

export default {
  data() {
    return {
      number: 1,
      message: "hello world"
    };
  }
};
</script>
