<template>
  <div>
    <p>单例组件的名称， 都应该加上前缀：The；</p>
    <ul>
      <li>单例组件不会定义 props；</li>
      <li>单例组件并不表示只能使用一次， 而是表示在每个页面只能使用一次；</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
