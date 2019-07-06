import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Button } from "element-ui";

@Component({})
export default class C0401 extends Vue {
  private name: string = "PARENT";

  public render() {
    return (
      <div>
        <ul>
          <li>组件元素之间的内容会被替换到组件的 slot 元素位置；</li>
          <li>
            从模板的层面来讲，组件元素之间的内容处于父组件的模板之中， 只能访问父组件的数据，而不能访问组件本身的数据；
          </li>
          <li>父组件模板中的内容会被编译到父组件的作用域； 子组件模板中的内容会被编译到子组件的作用域；</li>
        </ul>
        <hr />
        <C01>
          <p>
            <Button type="primary">{this.name}</Button>
          </p>
        </C01>
      </div>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
@Component({})
class C01 extends Vue {
  private name: string = "CHILD";

  public render() {
    return (
      <div>
        <p>{this.$slots.default}</p>
        <p>
          <Button>{this.name}</Button>
        </p>
      </div>
    );
  }
}
