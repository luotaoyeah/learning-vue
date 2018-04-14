<template>
  <div>
    <h1>7. System Modifier Keys</h1>
    <h2>7.1.</h2>
    <p>
      <small>
        <i>
          vue 提供了几个特殊的按键修饰；
          在使用它们的时候，表示如果事件要被触发，
          必须同时按住这些修饰符表示的按键；
          <ul>
            <li>.ctrl</li>
            <li>.alt</li>
            <li>.shift</li>
            <li>.meta</li>
          </ul>
        </i>
      </small>
    </p>
    <p>
      <small>
        <i>
          没有使用 .ctrl 修饰符，直接回车就会触发事件；
        </i>
      </small>
    </p>
    <input
      style="padding: 7px;border-radius: 3px;"
      type="text"
      @keyup.enter="handleKeyUp01"
    />
    <p>
      <small>
        <i>
          使用 .ctrl 修饰符，在回车的同时必须按住 CTRL 键才会触发事件；
        </i>
      </small>
    </p>
    <input
      style="padding: 7px;border-radius: 3px;"
      type="text"
      @keyup.enter.ctrl="handleKeyUp01"
    />
    <h2>7.2.</h2>
    <p>
      <small>
        <i>
          .ctrl 不是 CTRL 键的事件修饰符别名，如果是要监听 CTRL 键的 keyup 事件，
          需要使用 CTRL 键的 KeyCode 作为修饰符，即 keyup.17；
        </i>
      </small>
    </p>
    <input
      style="padding: 7px;border-radius: 3px;"
      type="text"
      @keyup.17="handleKeyUp01"
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
<style scoped>
</style>
