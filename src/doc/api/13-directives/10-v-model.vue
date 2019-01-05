<template>
  <div>
    <ul>
      <li>
        只能用在下面几种元素上：
        <ul>
          <li>&lt;input&gt;</li>
          <li>&lt;select&gt;</li>
          <li>&lt;textarea&gt;</li>
          <li>components</li>
        </ul>
      </li>
      <li>
        修饰符：
        <ul>
          <li>.lazy ：绑定 change 事件，而非 input 事件；</li>
          <li>.number ：自动将绑定值转换为数字；</li>
          <li>.trim ：自动移除首尾空白；</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped></style>
