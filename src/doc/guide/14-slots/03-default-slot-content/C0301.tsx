import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Button } from "element-ui";

@Component({})
export default class C0301 extends Vue {
  public render() {
    return (
      <div>
        <ul>
          <li>
            可以在 slot 元素之间声明默认内容， 当组件元素之间没有内容时，
            就会显示默认内容，否则使用组件元素之间的内容；
          </li>
        </ul>
        <hr />
        <C01 />
        <hr />
        <C01>
          <Button>BODY</Button>
        </C01>
      </div>
    );
  }
}

@Component({})
class C01 extends Vue {
  public render() {
    return (
      <div>
        <header>
          <p>
            <Button>HEADER</Button>
          </p>
        </header>
        <content>
          {this.$slots.default || <Button>DEFAULT SLOT CONTENT</Button>}
        </content>
        <footer>
          <p>
            <Button>FOOTER</Button>
          </p>
        </footer>
      </div>
    );
  }
}
