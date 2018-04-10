<template>
  <div>
    <h1>5. Scoped Slots</h1>
    <small>
      <ul>
        <li>
          组件元素之间的内容默认是属于父组件作用域的，
          只能访问父组件的数据；
          那如何才能访问子组件的数据呢 ?
          <ol>
            <li>
              在子组件的 slot 元素上，将要暴露给父组件的数据绑定到一个属性上（例如：data）；
            </li>
            <li>
              在父组件中，组件元素之间的元素上，
              通过 slot-scope 属性拿到子组件暴露出来的作用域对象（scope）；
            </li>
            <li>
              通过 scope.data 就可以拿到子组件暴露出来的数据；
            </li>
          </ol>
        </li>
      </ul>
    </small>
    <TodoList :todos="todos">
      <template slot-scope="scope">
        {{scope.data.id}}. {{scope.data.text}}
      </template>
    </TodoList>
    <TodoList02 :todos="todos">
      <template slot-scope="scope">
        <p>{{scope.data.id}}. {{scope.data.text}}</p>
      </template>
      <template
        slot-scope="scope"
        slot="footer"
      >
        <p>{{scope.index}}: {{scope.data.text.toUpperCase()}}</p>
      </template>
    </TodoList02>
    <h2>5.1. Destructuring slot-scope</h2>
    <small>
      <ul>
        <li>
          slot-scope 属性的值可以使用'函数参数结构'的语法；
        </li>
      </ul>
    </small>
    <TodoList :todos="todos">
      <template slot-scope="{ data }">
        {{data.id}}. {{data.text}}
      </template>
    </TodoList>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("TodoList", {
  template: `
<ul>
  <li v-for="todo in todos" :key="todo.id">
    <slot :data="todo">
      {{todo.text}}
    </slot>
  </li>
</ul>
  `,
  props: ["todos"]
});

Vue.component("TodoList02", {
  template: `
<ul>
  <li v-for="(todo, todoIndex) in todos" :key="todo.id">
    <slot :data="todo">
      {{todo.text}}
    </slot>
    <slot name="footer" :data="todo" :index="todoIndex">
      {{todo.text}}
    </slot>
  </li>
</ul>
  `,
  props: ["todos"]
});

export default {
  data() {
    return {
      todos: [
        {
          id: "01",
          text: "tom"
        },
        {
          id: "02",
          text: "cat"
        },
        {
          id: "03",
          text: "foo"
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>
