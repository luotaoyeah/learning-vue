<template>
  <div>
    <ul>
      <li>
        指令定义对象包含 5 个钩子函数，
        都是可选的；
        <ol>
          <li>
            bind ：
            当指令绑定到元素上时调用，
            只会调用一次；
          </li>
          <li>
            inserted ：
            当绑定的元素插入到父节点时调用；
            此时，
            可以保证父节点是存在的，
            但不能保证父节点已经渲染到了 DOM 中；
          </li>
          <li>
            update ：
            当绑定的元素组件的 VNode 更新时调用，
            此时，
            不能保证子组件的 VNode 已经被更新了；
          </li>
          <li>
            componentUpdated :
            当绑定的元素组件已经其子组件的 VNode 都被更新时调用；
          </li>
          <li>
            unbind ：
            当指令从元素上解绑时调用，
            只会调用一次；
          </li>
        </ol>
        <p>
          <input
            type="text"
            style="padding: 7px;border-radius: 3px;"
            v-model="message"
            v-red-border
          >
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return { message: "" };
  },
  directives: {
    redBorder: {
      bind(el) {
        console.log("bind()");
      },
      inserted(el) {
        console.log("inserted()");
      },
      update(el) {
        console.log("update()");
      },
      componentUpdated(el) {
        console.log("componentUpdated()");
      },
      unbind(el) {
        console.log("unbind()");
      }
    }
  },
  components: {}
};
</script>
<style scoped>
</style>
