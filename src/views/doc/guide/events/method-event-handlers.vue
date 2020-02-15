<template>
  <section>
    <!------------------------------------------------------------------------------------------------------
        可以绑定事件处理函数对象，
    ------------------------------------------------------------------------------------------------------->
    <button :style="{ borderRadius: '3px', marginRight: '12px' }" v-on:click="onClick">{{ n }}</button>
  </section>
</template>

<script>
// https://v3.vuejs.org/guide/events.html#method-event-handlers

export default {
  data() {
    return { n: 1 };
  },
  methods: {
    /*----------------------------------------------------------------------------------------------------
     * 直接绑定方法对象本身，方法被调用时会自动传入参数，
     * 方法中的 this 指向当前组件实例
     *----------------------------------------------------------------------------------------------------*/
    onClick(event) {
      this.n += 1;
      console.assert(event instanceof MouseEvent);
    },
  },
};
</script>
