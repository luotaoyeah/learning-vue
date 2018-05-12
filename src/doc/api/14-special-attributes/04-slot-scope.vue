<template>
  <div>
    <ul>
      <li>
        将一个元素声明为 scoped slot，表达式的格式类似函数参数的格式，可以使用函数参数解构；
        <C01 :items="items">
          <p slot-scope="{ item }">
            <ElTag>{{item.id}}. {{item.text}}</ElTag>
          </p>
        </C01>
      </li>
      <li>
        不支持动态绑定；
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          text: "foo"
        },
        {
          id: 2,
          text: "bar"
        }
      ]
    };
  },
  components: {
    C01: {
      template: `
        <ul>
          <li v-for="item in items" :key="item.id">
            <slot :item="item">{{item.text}}</slot>
          </li>
        </ul>`,
      props: {
        items: {
          type: Array
        }
      }
    }
  }
};
</script>
<style scoped>
</style>
