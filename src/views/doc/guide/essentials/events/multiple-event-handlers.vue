<template>
  <section>
    <!------------------------------------------------------------------------------------------------------
        使用逗号操作符（comma operator）同时绑定多个处理函数，
        此时必须使用方法调用语句，不能绑定方法对象本身，（angular 不支持），
    ------------------------------------------------------------------------------------------------------->
    <button :style="{ borderRadius: '3px' }" @click="onClick01(), onClick02()">CLICK</button>
  </section>
</template>

<script>
// https://v3.vuejs.org/guide/events.html#multiple-event-handlers

export default {
  methods: {
    onClick01() {
      console.log('%cevent handler 01', 'color:red;');
    },
    onClick02() {
      console.log('%cevent handler 02', 'color:blue;');
    },
  },
};
</script>
