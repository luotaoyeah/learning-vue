<template>
  <div>
    <h1>3. Control Reusable Elements with key</h1>
    <h2>3.1.</h2>
    <p>
      <small>
        <i>
          为了尽可能高效的渲染元素，vue 会尽可能重复利用元素，而不是从头开始渲染一个元素；
          例如通过切换登录类型来切换不同输入框，两个输入框使用的都是 input 组件，
          所以在切换显示的时候 vue 会重用这个 input 组件，而不是每次都重新渲染一个 input；
          切换显示的时候，因为 input 组件是同一个（只是 placeholder 属性重新渲染了），
          所以用户输入的内容不会被擦除；
        </i>
      </small>
    </p>
    <template v-if="type === 'username'">
      <label>Username:</label>
      <input
        type="text"
        placeholder="username"
      >
    </template>
    <template v-else>
      <label>Email:</label>
      <input
        type="text"
        placeholder="email"
      >
    </template>
    <h2>3.2.</h2>
    <p>
      <small>
        <i>
          有时候不想要这种行为，可以通过给元素设置不同的 key 属性，来告诉 vue 不要重用这两个组件；
          因为 label 组件没有设置 key 属性，所以 label 组件依然是重用的；
        </i>
      </small>
    </p>
    <template v-if="type === 'username'">
      <label>Username:</label>
      <input
        type="text"
        key="username"
        placeholder="username"
      >
    </template>
    <template v-else>
      <label>Email:</label>
      <input
        type="text"
        key="email"
        placeholder="email"
      >
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: "username"
    };
  }
};
</script>
<style scoped>
</style>
