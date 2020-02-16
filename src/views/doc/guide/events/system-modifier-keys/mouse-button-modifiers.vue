<template>
  <!------------------------------------------------------------------------------------------------------
      .left/.right/.middle 用来控制触发鼠标事件的必须是某个鼠标按键，
  ------------------------------------------------------------------------------------------------------->
  <button :style="{ borderRadius: '3px', marginRight: '12px' }" @click.left="onClickLeft">@click.left</button>
  <button :style="{ borderRadius: '3px', marginRight: '12px' }" @click.middle="onClickMiddle">@click.middle</button>
  <button :style="{ borderRadius: '3px', marginRight: '12px' }" @click.right="onClickRight">@click.right</button>
</template>

<script>
// https://v3.vuejs.org/guide/events.html#mouse-button-modifiers

export default {
  methods: {
    onClickLeft(event) {
      console.log(event);
      console.assert(event.button === 0);
    },
    onClickMiddle(event) {
      console.log(event);
      console.assert(event.button === 1);
    },
    onClickRight(event) {
      console.log(event);
      console.assert(event.button === 2);
    },
  },
};
</script>
