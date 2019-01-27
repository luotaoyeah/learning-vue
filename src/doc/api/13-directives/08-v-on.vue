<template>
  <div>
    <ul>
      <li>表达式类型：Function | Object | Inline Statement；</li>
      <li>
        描述： 绑定事件监听；
        <ul>
          <li>在普通元素上使用，表示监听原生事件；</li>
          <li>
            在组件元素上使用，表示监听组件自定义事件；
            <ul>
              <li>可以使用.native修饰符，监听组件根元素上的原生事件；</li>
            </ul>
          </li>
          <li>
            如果有修饰符，表达式可以为空；
            <p>
              <a href="http://www.github.com" v-on:click.prevent>github.com </a>
            </p>
          </li>
          <li>
            监听原生事件时，回调函数接收一个参数：事件对象；如果使用行内表达式，可以使用
            $event 或者 arguments[0] 获取到这个参数；
            <p>
              <a
                href="http://www.github.com"
                v-on:click.prevent="handleClick01($event)"
                >github.com
              </a>
            </p>
            <p>
              <a
                href="http://www.github.com"
                v-on:click.prevent="handleClick01(arguments[0])"
                >github.com
              </a>
            </p>
          </li>
          <li>
            监听组件事件时，可以使用 $event 获取到第一个参数；可以通过 arguments
            获取到所有参数；
            <p>
              <C01 @click="handleClick02($event, arguments[1])"></C01>
              <C01 @click="handleClick02(...arguments)"></C01>
            </p>
          </li>
          <li>
            如果表达式为一个对象，表示同时绑定多个事件监听；属性名表示事件名称，属性值表示对应的回调函数；
            <p>
              <!--eslint-disable vue/valid-v-on vue/no-parsing-error-->
              <C02 v-on="{ click03: handleClick03, click04: handleClick04 }" />
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
    return {};
  },
  methods: {
    handleClick01(event) {
      this.$alert(event.type, "event.type", {
        showClose: false
      });
    },
    handleClick02(name, age) {
      this.$alert(`name: ${name}, age: ${age}`, "event.type", {
        showClose: false
      });
    },
    handleClick03() {
      alert("click03");
    },
    handleClick04() {
      alert("click04");
    }
  },
  components: {
    C01: {
      template: '<ElButton @click="handleClick02">C01</ElButton>',
      methods: {
        handleClick02() {
          this.$emit("click", "tom", 18);
        }
      }
    },
    C02: {
      template: '<ElButton @click="handleClick02">C01</ElButton>',
      methods: {
        handleClick02() {
          this.$emit("click03");
          this.$emit("click04");
        }
      }
    }
  }
};
</script>
