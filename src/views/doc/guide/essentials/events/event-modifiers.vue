<template>
  <fieldset>
    <!------------------------------------------------------------------------------------------------------
        对于事件处理时的一些常用需求，vue 提供了一些 modifier 语法糖，用来简化操作，
        比如 .prevent 表示调用 event.preventDefault()，
        比如 .stop    表示调用 event.stopPropagation()，
    ------------------------------------------------------------------------------------------------------->

    <a href="https://github.com/" target="_blank" @click="$event.preventDefault()">https://github.com/</a>
    <br />
    <a href="https://github.com/" target="_blank" @click.prevent="void 0">https://github.com/</a>
  </fieldset>

  <fieldset>
    <!------------------------------------------------------------------------------------------------------
        多个 modifier 可以一起使用，它们的先后顺序是有影响的，
    ------------------------------------------------------------------------------------------------------->
    <a href="https://github.com/" target="_blank" @click.prevent.stop="void 0">https://github.com/</a>
    <br />
    <a href="https://github.com/" target="_blank" @click.stop.prevent="void 0">https://github.com/</a>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/events.html#event-modifiers

const stopPropagation = MouseEvent.prototype.stopPropagation;
const preventDefault = MouseEvent.prototype.preventDefault;

export default {
  beforeCreate() {
    MouseEvent.prototype.stopPropagation = new Proxy(MouseEvent.prototype.stopPropagation, {
      apply(target, thisArg, argArray) {
        console.log('%c stopPropagation()', 'color:blue;');
        return target.apply(thisArg, argArray);
      },
    });
    MouseEvent.prototype.preventDefault = new Proxy(MouseEvent.prototype.preventDefault, {
      apply(target, thisArg, argArray) {
        console.log('%c preventDefault()', 'color:red;');
        return target.apply(thisArg, argArray);
      },
    });
  },
  unmounted() {
    MouseEvent.prototype.stopPropagation = stopPropagation;
    MouseEvent.prototype.preventDefault = preventDefault;
  },
};
</script>
