<template>
  <div>
    <fieldset>
      <legend>Passing the Properties of an Object</legend>

      <p>v-bind 后面不指定 prop, 而是直接绑定一个对象, 表示将这个对象的每一个属性都当成一个 prop, 一次性传递给组件.</p>
      <p>这时候 v-bind 就不能简写为 : 了.</p>

      <blog-post v-bind:content="post.content" v-bind:title="post.title"></blog-post>
      <blog-post v-bind="post"></blog-post>
    </fieldset>
  </div>
</template>

<script>
import BlogPost from '@/views/guide/components-props/BlogPost';

export default {
  name: 'Props',
  data() {
    return {
      post: {
        title: 'TITLE',
        content: 'CONTENT',
      },
    };
  },
  components: {
    BlogPost,
  },
};
</script>

<style scoped></style>
