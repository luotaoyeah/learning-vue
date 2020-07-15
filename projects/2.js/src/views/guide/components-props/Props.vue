<template>
  <div>
    <fieldset>
      <legend>Passing the Properties of an Object</legend>

      <p>v-bind 后面不指定 prop, 而是直接绑定一个对象, 表示将这个对象的每一个属性都当成一个 prop, 一次性传递给组件.</p>
      <p>这时候 v-bind 就不能简写为 : 了.</p>

      <blog-post v-bind:content="post.content" v-bind:title="post.title"></blog-post>
      <blog-post v-bind="post"></blog-post>
    </fieldset>

    <fieldset>
      <legend>One-Way Data Flow</legend>

      <p>如果 prop 是一个对象, 则传的是对象引用, 在子组件中修改 prop 对象的属性, 父组件中绑定的数据也会被修改.</p>

      <button @click="onClick">{{ data01.x }}</button>
      <comp-a :obj="data01"></comp-a>
    </fieldset>

    <fieldset>
      <legend>Prop Validation</legend>

      <p>props 如果类型是 Object / Array, 则它的默认值需要使用函数返回.</p>

      <comp-b :prop01="{ x: 2 }"></comp-b>
      <comp-b></comp-b>
    </fieldset>

    <fieldset>
      <legend>Non-Prop Attributes</legend>

      <p>non-prop attribute 默认会传给根元素, 并且会覆盖根元素上的同名的 attr. class / style 会特殊处理, 会进行合并.</p>

      <p>使用 inheritAttrs: false 禁用上面说的这种默认行为.</p>

      <p>在子组件中可以通过 vm.$attrs 访问所有的 non-prop attribute, 除了 class / style.</p>

      <comp-c :x="1" :y="2" :z="3"></comp-c>
      <comp-d :x="1" :y="2" :z="3"></comp-d>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'Props',
  data() {
    return {
      post: {
        title: 'TITLE',
        content: 'CONTENT',
      },
      data01: {
        x: 1,
      },
    };
  },
  methods: {
    onClick() {
      this.data01.x += 1;
    },
  },
  components: {
    BlogPost: {
      template: `
        <fieldset>
        <legend>{{ title }}</legend>
        <p>{{ content }}</p>
        </fieldset>`,
      props: {
        title: String,
        content: String,
      },
    },
    CompA: {
      template: `
        <button @click='onClick'>{{ dataObj.x }}</button>`,
      props: ['obj'],
      data() {
        return { dataObj: this.obj };
      },
      created() {
        console.assert(this.obj === this.dataObj);
      },
      methods: {
        onClick() {
          this.dataObj.x += 1;
        },
      },
    },
    CompB: {
      template: `
        <p>{{ prop01.x }}</p>`,
      props: {
        prop01: {
          type: Object,
          default() {
            return { x: 1 };
          },
        },
      },
    },
    CompC: {
      template: `
        <p :z='2'>{{ x }}</p>`,
      props: {
        x: { type: [Number, String] },
      },
    },
    CompD: {
      template: `
        <p :z='2'>{{ x }}</p>`,
      inheritAttrs: false,
      props: {
        x: { type: [Number, String] },
      },
      created() {
        console.log(this.$attrs);
      },
    },
  },
};
</script>

<style scoped></style>
