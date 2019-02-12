<template>
  <div>
    <ul>
      <li>
        要想通过 createElement() 方法实现与模板相同的效果， 需要了解
        createElement() 方法的参数；
      </li>
      <li>
        createElement() 接收 3 个参数， 第二个参数是可选的；
        <ul>
          <li>
            第一个参数， 类型可以是 String | Object | Function，
            <ul>
              <li>如果是 String， 表示 HTML 元素标签名称；</li>
              <li>如果是 Object， 表示组件选项对象（component options）；</li>
              <li>
                如果是 Function， 表示一个异步的函数， 返回'HTML
                标签名称'或者'组件选项对象'；
              </li>
            </ul>
          </li>
          <li>第二个参数， 可选， 类型是 Object， 表示属性对象；</li>
          <li>
            第三个参数， 类型可以是 String | Array， 表示子节点；
            <ul>
              <li>如果是 String， 表示文本节点；</li>
              <li>
                如果是 Array， 则其中每一个元素又是 createElement()
                方法调用返回的结果；
              </li>
            </ul>
          </li>
          <li>
            第二个参数是可选的， 那么我们可以通过实际第二个参数的类型，
            来判断是否省略了第二个参数；
            <ul>
              <li>
                如果实际第二个参数是 Object， 那么表示第二个参数没有省略；
              </li>
              <li>
                如果实际第二个参数是 String | Array， 表示第二个参数被省略了；
              </li>
            </ul>
            <MyComponent210301></MyComponent210301>
          </li>
        </ul>
      </li>
    </ul>
    <h2>The Data Object In-Depth</h2>
    <ul>
      <li>
        在模板中， v-bind:class 和 v-bind:style 会被特殊对待； 在属性对象中，
        它们也分别有对应的顶层属性；
      </li>
      <li>
        属性对象中， 可以绑定普通的 HTML 属性， 也可以绑定 DOM 属性，
        还可以绑定组件的 props；
        <p><MyComponent210302></MyComponent210302></p>
      </li>
    </ul>
    <h2>Constraints</h2>
    <ul>
      <li>
        组件中所有的 VNode 必须是唯一的， 不能重复， 即不能将同一个 VNode
        用在多个地方；
      </li>
      <li>
        如果需要重复使用某个 VNode， 可以使用工厂方法，
        每次调用工厂方法就返回一个 VNode 的实例；
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("MyComponent210301", {
  render(h) {
    return h("p", ["SOME TEXT ", h("i", ["some component children"])]);
  }
});

Vue.directive("directive210301", {
  inserted(el, binding) {
    el.style.borderColor = "red";
    el.style.borderRadius = "3px";
  }
});

Vue.component("MyComponent210302", {
  render(h) {
    const vm = this;
    return h(
      "button",
      {
        class: {
          foo: true,
          bar: false
        },
        style: {
          color: "red"
        },
        attrs: {
          id: "btn01"
        },
        props: {
          myProp: "tom"
        },
        domProps: {
          innerHTML: "CLICK ME"
        },
        on: {
          click(e) {
            console.log("MyComponent210302.click()");
            vm.$el.style.borderColor = "green";
          }
        },
        directives: [
          {
            name: "directive210301",
            expression: "1 + 1",
            value: 2,
            arg: "foo",
            modifiers: {
              ctrl: true,
              exact: true
            }
          }
        ],
        slot: "body",
        key: "MyComponent210302Key",
        ref: "MyComponent210302Ref"
      },
      "click me"
    );
  }
});

export default {
  data() {
    return {};
  },
  components: {}
};
</script>
