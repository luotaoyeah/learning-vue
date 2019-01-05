<template>
  <div>
    <ul>
      <li>.trim 会自动去除首尾的空白字符；</li>
    </ul>
    <p>
      <input
        style="border-radius: 3px;padding: 7px;"
        type="text"
        v-model="message01"
      />
      <ElButton
        >value: [{{ message01 }}], length: {{ message01.length }}</ElButton
      >
    </p>
    <p>
      <input
        type="text"
        style="border-radius: 3px;padding: 7px;"
        v-model.trim="message02"
      />
      <ElButton
        >value: [{{ message02 }}], length: {{ message02.length }}</ElButton
      >
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message01: "",
      message02: ""
    };
  }
};
</script>
<style scoped></style>
