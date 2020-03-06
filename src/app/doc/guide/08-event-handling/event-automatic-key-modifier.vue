<template>
  <div>
    <h1>6. Automatic Key Modifier</h1>
    <p>
      <small>
        <i>
          可以直接使用 KeyboardEvent.key 作为键盘事件修饰符； 使用的时候，将
          KeyboardEvent.key 转换为 kebab-case；
        </i>
      </small>
    </p>
    <input
      style="padding: 7px;border-radius: 3px;"
      type="text"
      @keyup.control="handleKeyUp01"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleKeyUp01(e) {
      if (e) {
        alert(e.code);
      }
    }
  }
};
</script>
