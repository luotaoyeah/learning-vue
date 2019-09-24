<template>
  <div>
    <h1>2. Transitioning Single Elements/Components</h1>
    <small>
      <ul>
        <li>
          vue 提供了一个 transition 组件， 用来实现'进入'和'离开'的过渡效果； 在以下情况下生效：
          <ul>
            <li>v-if</li>
            <li>v-show</li>
            <li>动态组件</li>
            <li>组件根节点</li>
          </ul>
          <button v-on:click="show = !show">toggle</button>
          <transition name="fade"> <p v-if="show">hello world</p> </transition>
        </li>
        <li>
          当 transition 元素中间插入和删除元素时， 会发生：
          <ul>
            <li>
              vue 首先检查元素是否应用了 CSS 的过渡动画， 如果有， 则在合适的时机添加和删除这些样式；
            </li>
            <li>
              检查 transition 元素是否定义了钩子函数， 如果有， 则在合适的时机调用这些钩子函数；
            </li>
            <li>如果都没有， 则插入和删除操作会在下一帧立即执行；</li>
          </ul>
        </li>
      </ul>
    </small>
    <h2>2.1. Transition Classes</h2>
    <!--TODO-->
  </div>
</template>

<script>
export default {
  data() {
    return { show: true };
  },
  mounted() {},
};
</script>
<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
