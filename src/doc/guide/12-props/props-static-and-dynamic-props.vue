<template>
  <div>
    <h1>2. Static and Dynamic Props</h1>
    <small>
      <ul>
        <li>可以直接传递静态数据给 props 属性；</li>
        <li>
          也可以使用 v-bind 动态传递数据给 props 属性，
          此时，数据可以是任意类型的数据；
        </li>
        <li>如果一个 props 属性没有绑定数据， 表示绑定的数据为布尔值 true；</li>
        <li>
          如果要将一个对象的所有属性作为 props 属性传递， 可以直接使用 v-bind
          绑定这个对象， v-bind 后面不跟任何属性名； 此时的 v-bind
          不能使用简写形式（冒号）；
        </li>
      </ul>
    </small>
    <BlogPost v-for="post in posts" :key="post.id" v-bind="post"></BlogPost>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("BlogPost", {
  template: "<p><i>{{id}}. </i>{{title}}</p>",
  props: ["id", "title"]
});

export default {
  data() {
    return {
      posts: [
        {
          id: "001",
          title: "post001"
        },
        {
          id: "002",
          title: "post002"
        }
      ]
    };
  }
};
</script>
