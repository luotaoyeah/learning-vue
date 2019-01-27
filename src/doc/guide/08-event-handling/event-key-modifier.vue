<template>
  <div>
    <h1>5. Key Modifiers</h1>
    <h2>5.1.</h2>
    <p>
      <small>
        <i>
          在监听键盘事件的时候，通常需要判断是哪一个按键触发的事件； vue
          支持使用 KeyCode 作为键盘事件修饰符， 当按键的 KeyCode
          跟修饰符一致时，才会触发事件；
        </i>
      </small>
    </p>
    <input
      style="padding: 7px;border-radius: 3px;"
      type="text"
      v-on:keyup.13="handleKeyUp01"
    />
    <h2>5.2.</h2>
    <p>
      <small>
        <i>
          vue 为常用的按键 KeyCode 提供了别名；
          <ul>
            <li>.enter</li>
            <li>.tab</li>
            <li>.delete</li>
            <li>.esc</li>
            <li>.space</li>
            <li>.up</li>
            <li>.down</li>
            <li>.left</li>
            <li>.right</li>
          </ul>
        </i>
      </small>
    </p>
    <input
      style="padding: 7px;border-radius: 3px;"
      type="text"
      @keyup.enter="handleKeyUp01"
      @keyup.tab="handleKeyUp01"
      @keyup.delete="handleKeyUp01"
      @keyup.esc="handleKeyUp01"
      @keyup.space="handleKeyUp01"
      @keyup.up="handleKeyUp01"
      @keyup.down="handleKeyUp01"
      @keyup.left="handleKeyUp01"
      @keyup.right="handleKeyUp01"
    />
    <h2>5.3.</h2>
    <p>
      <small>
        <i> 可以通过 Vue.config.keyCodes 自定义键盘事件修饰符别名； </i>
      </small>
    </p>
    <input
      style="padding: 7px;border-radius: 3px;"
      type="text"
      placeholder="key modifier for F1"
      @keyup.f1="handleKeyUp01"
    />
  </div>
</template>
<script>
import Vue from "vue";

Vue.config.keyCodes.f1 = 112;

export default {
  data() {
    return {};
  },
  methods: {
    handleKeyUp01(e) {
      if (e) {
        alert(`keyCode: ${e.keyCode}, code: ${e.code}`);
      }
    }
  }
};
</script>
