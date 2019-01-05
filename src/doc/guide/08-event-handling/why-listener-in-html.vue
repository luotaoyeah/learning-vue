<template>
  <div>
    <h1>10. Why Listeners in Html</h1>
    <p>
      <small>
        <i>
          表面上看，在 HTML 中绑定事件违背了'责任分离'原则； 但实际上使用 v-on
          有很多好处：
          <ol>
            <li>更容易通过 HTML 定位事件处理回调函数；</li>
            <li>
              因为不用再 JS 代码中手动绑定事件，代码看起来更纯粹，更容易测试；
            </li>
            <li>
              不用关心资源回收问题，当 ViewModel 销毁时，事件监听会被自动销毁；
            </li>
          </ol>
        </i>
      </small>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped></style>
