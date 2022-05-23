<template>
  <!--
      只有一个根元素, 且该元素是 DOM 元素, 且继承的属性跟元素本身的属性有冲突:
        1. 如果是 class/style, 则会进行合并
        2. 如果是其他属性, 则本身的属性会被覆盖
        3. 如果是事件监听器, 则都会执行, 本身的监听器会先执行
  -->
  <button id="bar" @click="fn01">J</button>
</template>

<script lang="ts" setup>
  function fn01() {
    console.log('click inner');
  }
</script>

<style scoped></style>
