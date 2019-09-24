<template>
  <div>
    <h1>1. Element & Component Access</h1>
    <small>
      <ul>
        <li>大部分情况下，应该避免手动操作 DOM 元素；</li>
      </ul>
    </small>
    <h2>1.1. Accessing the Root Instance</h2>
    <small>
      <ul>
        <li>
          在子组件中，可以通过 $root 访问根组件实例；
          <ul>
            <li>$root.message: {{ $root.message }}</li>
          </ul>
        </li>
      </ul>
    </small>
    <h2>1.2. Accessing the Parent Component Instance</h2>
    <small>
      <ul>
        <li>在子组件中，可以通过 $parent 访问父组件（直接父组件）实例；</li>
        <li>通常情况下，不要使用 $parent 来直接修改父组件的数据；</li>
      </ul>
    </small>
    <h2>1.3. Accessing Child Component Instance</h2>
    <small>
      <ul>
        <li>
          虽然 vue 提供了 props 和 event 用来进行父子组件之间的交互， 但是有时候，父组件需要在 JS
          代码中直接访问子组件的数据和方法；
        </li>
        <li>
          可以通过给子组件设置 ref 属性， 然后父组件就可以通过子组件的 ref 属性，获取到子组件实例的引用；
          <p>
            <button @click="$refs.myInputRef01.focus()">focus input</button>
            <MyInput ref="myInputRef01"></MyInput>
          </p>
        </li>
        <li>
          如果 ref 和 v-for 一起使用， 通过 ref 获取到的是子组件实例数组；
          <p>
            <button @click="getRefs">get refs</button>
            <MyInput ref="myInputRef02" v-for="(item, itemIndex) in 3" :key="'my_input_02_' + itemIndex"></MyInput>
          </p>
        </li>
      </ul>
    </small>
    <h2>1.4. Dependency Injection</h2>
    <small>
      <ul>
        <li>
          vue 提供了两个实例选项用来实现'依赖注入'：
          <ul>
            <li>provide（父组件）</li>
            <li>inject（子组件）</li>
          </ul>
        </li>
        <li>在父组件上通过 provide 声明要提供给子组件的数据或者方法；</li>
        <li>在子组件上通过 inject 声明要从父组件注入的数据或者方法；</li>
      </ul>
    </small>
    <MyComponent></MyComponent>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getRefs() {
      console.log("$refs.myInputRef02", this.$refs.myInputRef02);
    },
  },
  provide() {
    return {
      message: "hello world",
      alert() {
        alert("hello vue");
      },
    };
  },
  components: {
    MyInput: {
      template: `
        <input
          type="text"
          style="border-radius: 3px;padding: 7px;"
          ref="inputRef"
        />`,
      methods: {
        focus() {
          this.$refs.inputRef.focus();
        },
      },
    },
    MyComponent: {
      template: `
        <div>
          <button @click="alert">injected message: {{message}}</button>
        </div>`,
      inject: ["message", "alert"],
    },
  },
};
</script>
