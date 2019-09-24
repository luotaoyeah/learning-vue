<template>
  <div>
    <p>
      <i>
        默认情况下，v-model 会监听 input 事件触发数据更新， 可以通过 .lazy 修饰符，指定它在 change 事件触发数据更新；
      </i>
    </p>
    <p>
      <small>输入时实时更新：</small>
      <input type="text" style="border-radius: 3px;padding: 7px;" v-model="message" />
    </p>
    <p>
      <small>失去焦点时更新：</small>
      <input type="text" style="border-radius: 3px;padding: 7px;" v-model.lazy="message" />
    </p>
    <p>Message: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { message: "" };
  },
};
</script>
