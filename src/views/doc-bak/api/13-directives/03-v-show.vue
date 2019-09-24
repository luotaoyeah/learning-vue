<template>
  <div>
    <ul>
      <li>类型：any</li>
      <li>
        描述：切换元素的 CSS 属性 display，实现显示或隐藏元素的效果；
        <p><ElSwitch v-model="showTag" /></p>
        <p><ElTag v-show="showTag" :closable="false">hello </ElTag></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTag: true,
    };
  },
  components: {},
};
</script>
