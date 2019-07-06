<template>
  <div>
    <h1>11. v-for with a Component</h1>
    <h2>11.1.</h2>
    <p>
      <small>
        <i>
          v-for 可以直接用在自定义组件上，跟普通元素一样使用； 区别是，用在组件上的时候，必须设置 key 属性；
        </i>
      </small>
    </p>
    <my-component v-for="item in 3" :key="item">{{ item }} </my-component>
    <h2>11.2.</h2>
    <p>
      <small>
        <i>
          因为组件有自己的隔离的作用域，所以 v-for 用在组件上的时候， 数据不会自动传递到组件中去，必须使用 props
          来传递数据； 这样避免了组件跟 v-for 的耦合，提高了组件的可重用性；
        </i>
      </small>
    </p>
    <h2>11.3.</h2>
    <input type="text" v-model="newTodoTitle" placeholder="输入新的标题，回车添加" @keyup.enter="addTodo" />
    <ul>
      <li
        is="todo-item"
        v-for="(item, index) in todos"
        :key="item.id"
        :title="item.title"
        @remove="todos.splice(index, 1)"
      ></li>
    </ul>
    <p>
      <small>
        <i>
          这儿使用了 is="todo-item" 这样的语法； 是因为 ul 下面只允许出现 li 元素， 因为如果直接在 ul
          下面使用自定义组件， 会出现 &lt;ul&gt;&lt;todo-item&gt;&lt;/todo-item&gt;&lt;/ul&gt; 这样的模板，
          这会导致浏览器解析报错；为了避免解析报错，使用 is="todo-item" 这样的语法， 达到跟直接使用组件元素一样的效果；
        </i>
      </small>
    </p>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("my-component", {
  template: "<p>custom component</p>"
});

Vue.component("todo-item", {
  props: ["title"],
  template: `<li>{{title}}<button style="color: red;" @click="$emit('remove')">remove</button></li>`
});

export default {
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "foo"
        },
        {
          id: 2,
          title: "bar"
        },
        {
          id: 3,
          title: "zoo"
        }
      ],
      nextTodoId: 4,
      newTodoTitle: ""
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoTitle
      });
      this.newTodoTitle = "";
    }
  }
};
</script>
