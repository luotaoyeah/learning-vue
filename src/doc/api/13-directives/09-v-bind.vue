<template>
  <div>
    <ul>
      <li>简写：（:）;</li>
      <li>
        修饰符：
        <ul>
          <li>
            .prop ：绑定 DOM 的 property 而不是 attribute；
            <p>
              <small>
                如果是普通元素， 则绑定元素的 DOM 节点对象的属性；
                如果是组件元素， 则绑定 vm.$el 的属性；
              </small>
            </p>
            <p><ElButton v-bind:text-content="name"></ElButton></p>
            <p><ElButton v-bind:text-content.prop="name"></ElButton></p>
          </li>
          <li>
            .sync ：'双向绑定'语法糖；
            <p>
              <small> x.sync="x" 等价于 x="x" @update:x="x = $event"； </small>
            </p>
            <p>
              <C01 :x="x"></C01>
              <C01 :x.sync="x"></C01>
              <C01 :x="x" v-on:update:x="x = $event"></C01>
            </p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "tom",
      x: "x"
    };
  },
  components: {
    C01: {
      template: `
        <p>
          <ElButton>{{$_x}}</ElButton>
          <ElInput v-model="$_x" style="width: 200px;"/>
        </p>`,
      props: ["x"],
      computed: {
        $_x: {
          get() {
            return this.x;
          },
          set(value) {
            this.$emit("update:x", value);
          }
        }
      }
    }
  }
};
</script>
<style scoped></style>
