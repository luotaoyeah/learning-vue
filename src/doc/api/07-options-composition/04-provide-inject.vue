<template>
  <div>
    <ul>
      <li>
        依赖注入；
      </li>
      <li>
        在父组件中通过 provide 声明依赖，在子孙组件（不管嵌套层次有多深）中通过 inject 注入需要的依赖；
      </li>
      <li>
        provide 选项可以是一个对象，也可以是一个返回对象的函数；
      </li>
      <li>
        inject 选项可以是一个字符串数组，每一个元素表示一个依赖的名称；
      </li>
      <li>
        inject 选项也可以是一个对象，其中：
        <ul>
          <li>
            属性名为绑定到本地的名称，属性值为：
            <ul>
              <li>
                依赖的名称；
              </li>
              <li>
                一个对象，包含 from 和 default 属性：
                <ul>
                  <li>
                    from 属性值为：依赖的名称；
                  </li>
                  <li>
                    default 属性值为：未找到指定的依赖时的默认值；
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        通过 inject 注入的依赖是非动态的，除非在 provide 中声明时，依赖本来就已经是动态了的；
      </li>
    </ul>
    <C01/>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  provide() {
    return {
      foo: "FOO",
      bar: "BAR"
    };
  },
  components: {
    C01: {
      template: `
        <p>
          <ElTag>{{foo02}}</ElTag>
          <ElTag>{{bar02}}</ElTag>
        </p>`,
      inject: {
        foo01: "foo",
        bar01: {
          from: "bar01",
          default: "bar01"
        }
      },
      data() {
        return {
          foo02: this.foo01,
          bar02: this.bar01
        };
      }
    }
  }
};
</script>
<style scoped>
</style>
