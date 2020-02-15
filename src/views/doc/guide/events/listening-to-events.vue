<template>
  <section>
    <!------------------------------------------------------------------------------------------------------
        使用指令 v-on:xxx 或者 @xxx 来监听事件，
    ------------------------------------------------------------------------------------------------------->
    <button :style="{ borderRadius: '3px', marginRight: '12px' }" v-on:click="n++">{{ n }}</button>
    <button :style="{ borderRadius: '3px', marginRight: '12px' }" @click="n++">{{ n }}</button>
  </section>
</template>

<script>
// https://v3.vuejs.org/guide/events.html#listening-to-events

export default {
  data() {
    return { n: 1 };
  },
};
</script>
