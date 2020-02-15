<template>
  <section>
    <!------------------------------------------------------------------------------------------------------
        可以绑定函数调用语句，
        此时需要手动传入需要的参数，可以使用特殊标识 $event 表示自动传入的参数，
    ------------------------------------------------------------------------------------------------------->
    <button :style="{ borderRadius: '3px', marginRight: '12px' }" v-on:click="onClick(2, $event)">
      increase 2：<span :style="{ color: 'red' }">{{ n }}</span>
    </button>
    <button :style="{ borderRadius: '3px', marginRight: '12px' }" v-on:click="onClick(4, $event)">
      increase 4：<span :style="{ color: 'red' }">{{ n }}</span>
    </button>
  </section>
</template>

<script>
// https://v3.vuejs.org/guide/events.html#methods-in-inline-handlers

export default {
  data() {
    return { n: 1 };
  },
  methods: {
    /*----------------------------------------------------------------------------------------------------
     * 直接绑定方法对象本身，方法被调用时会自动传入参数，
     * 方法中的 this 指向当前组件实例
     *----------------------------------------------------------------------------------------------------*/
    onClick(offset, event) {
      this.n += offset;
      console.assert(event instanceof MouseEvent);
    },
  },
};
</script>
