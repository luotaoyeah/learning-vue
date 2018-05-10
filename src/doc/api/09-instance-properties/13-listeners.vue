<template>
  <div>
    <ul>
      <li>
        组件元素上使用 v-on 绑定的事件监听；
      </li>
      <li>
        不包括使用了 .native 修饰符的；
        <p>
          <C01
            @click.native="handleClick"
            @input="handleInput"
            @change="handleChange"
          />
        </p>
      </li>
      <li>
        属性名为事件名，
        属性值为事件回调函数；
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleClick() {
      console.log("handleClick()");
    },
    handleInput() {
      console.log("handleInput()");
    },
    handleChange() {
      console.log("handleChange()");
    }
  },
  components: {
    C01: {
      template: "<ElButton @click='handleClick'>vm.$listeners</ElButton>",
      methods: {
        handleClick() {
          console.log(this.$listeners);
        }
      }
    }
  }
};
</script>
<style scoped>
</style>
