import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Button } from "element-ui";

@Component({})
export default class C0201 extends Vue {
  public render() {
    return (
      <div>
        <ul>
          <li>有时候需要使用多个 slot，可以通过 named slot 来实现；</li>
          <li>在组件模板中声明多个 slot，通过 name 属性来区分不同的 slot；</li>
          <li>
            在组件元素之间，通过 slot 属性来指定要使用的 slot， slot
            属性的值就是在模板中定义的 slot 元素的 name 属性；
          </li>
          <li>
            slot 属性可以用在 template 元素上， 也可以直接用在普通的元素上；
          </li>
          <li>
            组件模板中可以声明一个（且最多只能声明一个）默认的 slot， 即没有声明
            name 属性的 slot； 在组件元素之间没有 slot 属性的内容，
            都会被替换到这个默认的 slot 的位置；
          </li>
        </ul>
        <hr />
        <C01>
          <Button>DEFAULT 01</Button>
          <template slot="header">
            <p>
              <Button>HEADER</Button>
            </p>
          </template>
          <Button>DEFAULT 02</Button>
          <p slot="footer">
            <Button>FOOTER</Button>
          </p>
          <Button>DEFAULT 03</Button>
        </C01>
      </div>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
@Component({})
class C01 extends Vue {
  public render() {
    return (
      <div>
        <header>{this.$slots.header}</header>
        <content>{this.$slots.default}</content>
        <footer>{this.$slots.footer}</footer>
      </div>
    );
  }
}
