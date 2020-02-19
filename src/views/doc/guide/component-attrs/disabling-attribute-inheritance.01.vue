<template>
  <div>
    <button :style="$attrs.style">prop</button>
    <button :style="{ borderRadius: '3px', margin: '0px 12px' }" @click="$attrs.onClick">event</button>
    <button v-bind="$attrs">CLICK</button>
  </div>
</template>

<script>
export default {
  /*----------------------------------------------------------------------------------------------------
   * 设置 inheritAttrs: false 禁用 non-prop attribute 的自动继承，
   * 然后通过 $attrs 将它们放在需要的地方，
   *----------------------------------------------------------------------------------------------------*/
  inheritAttrs: false,
};
</script>
