<template>
  <div>
    <fieldset>
      <legend>把 class 当成一个普通的属性来绑定, 绑定一个 string.</legend>

      <p :class="'red'">red</p>
    </fieldset>

    <fieldset>
      <legend>:class 绑定一个 object</legend>

      <p>object 的每一个 key 表示一个 class, 对应的值是一个 boolean 值, 表示是否添加这个 class.</p>

      <p :class="classObj01">blue</p>
    </fieldset>

    <fieldset>
      <legend>:class 绑定一个 array, 数组元素可以是 string 或者 object.</legend>

      <p :class="classArray01">blue green</p>
    </fieldset>

    <fieldset>
      <legend>:class 和 class 可以共存.</legend>

      <p>class attribute 的值里面的 class 的顺序没有意义, 真正决定它们优先级的, 是它们在 css 文件中声明的顺序.</p>
      <p>如下的 class 的最终值为 "red blue", 但是由于在 css 中 red 声明在 blue 之后, 所以 red 中的 color 胜出.</p>

      <p :class="classObj01" class="red">red blue</p>
    </fieldset>

    <fieldset>
      <legend>组件上的 :class 会添加到组件的根元素上.</legend>

      <my-component :class="'blue'"></my-component>
    </fieldset>
  </div>
</template>

<script>
import MyComponent from './MyComponent';

export default {
  name: 'ClassStyleBindings',
  data() {
    return {
      /** @type { {[p: string]: boolean} } */
      classObj01: {
        red: false,
        blue: true,
      },
    };
  },
  computed: {
    classArray01() {
      return [this.classObj01, 'green'];
    },
  },
  components: { MyComponent },
};
</script>

<style scoped>
.blue {
  color: blue;
}

.red {
  color: red;
}

.green {
  color: green;
}
</style>
