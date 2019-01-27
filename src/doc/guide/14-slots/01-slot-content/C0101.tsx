import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Button } from "element-ui";

@Component({})
export default class C0101 extends Vue {
  public render() {
    return (
      <div>
        <ul>
          <li>
            vue 按照 web 组件规范草案实现了一个内容分发的 API，使用 slot
            元素作为内容分发的出口；
          </li>
          <li>
            在组件的模板中声明一个 &lt;slot /&gt;，
            然后就可以在组件元素之间插入任意内容，包括：
            <ul>
              <li>文本</li>
              <li>HTML 标签</li>
              <li>组件</li>
            </ul>
            这些内容会替换掉组件模板中的 slot 元素， 出现在最终的渲染结果中；
          </li>
          <li>
            如果组件模板中没有声明 slot 元素，
            那么组件元素之间的内容会被直接忽略；
          </li>
        </ul>
        <hr />
        <C01>
          <Button>内容分发</Button>
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
        <p>header</p>
        {this.$slots.default}
        <p>footer</p>
      </div>
    );
  }
}
