<template>
  <div>
    <h1>3. Computed Caching vs Methods</h1>
    <p>
      <small>
        <i>
          在数据绑定的表达式中调用方法，可以实现跟计算属性一样的效果；区别在于：计算属性会根据它所依赖的属性缓存计算结果，
          当依赖的属性值未改变时，即使多次使用计算属性，也只会计算一次属性的值，其余时候都是直接从缓存中取值；
          而调用方法，每次都会重新执行一次方法；
        </i>
      </small>
    </p>
    <p>computed property 1：{{reversedMessage}}</p>
    <p>computed property 2：{{reversedMessage}}</p>
    <p>invoking method in the expression 1：{{reverseMessage()}}</p>
    <p>invoking method in the expression 2：{{reverseMessage()}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "hello world"
    };
  },
  computed: {
    reversedMessage() {
      console.log("evaluate computed property");
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  methods: {
    reverseMessage() {
      console.log("invoke method");
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>
<style scoped>
</style>
