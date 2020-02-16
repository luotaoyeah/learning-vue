<template>
  <section>
    <!------------------------------------------------------------------------------------------------------
        对于事件处理时的一些常用需求，vue 提供了一些 modifier 语法糖，用来简化操作，
        比如 .prevent 表示调用 event.preventDefault()，
        比如 .stop    表示调用 event.stopPropagation()，
    ------------------------------------------------------------------------------------------------------->

    <a href="https://github.com/" target="_blank" @click="$event.preventDefault()">https://github.com/</a>
    <hr />
    <a href="https://github.com/" target="_blank" @click.prevent="void 0">https://github.com/</a>
  </section>
</template>

<script>
// https://v3.vuejs.org/guide/events.html#event-modifiers

export default {
  methods: {},
};
</script>
