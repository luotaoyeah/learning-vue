import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Button, Divider, Tooltip } from "ant-design-vue";

@Component({})
export class C034001 extends Vue {
  public render() {
    return (
      <div>
        <Tooltip placement="right" destroyTooltipOnHide={false}>
          <template slot="title">
            <span>SOME TOOLTIP CONTENT</span>
          </template>
          <Button>FOO</Button>
        </Tooltip>

        <Divider dashed={true}></Divider>

        <p>
          <code>destroyTooltipOnHide</code>
          表示是否在隐藏 tooltip 的时候, 销毁它的组件实例
        </p>
      </div>
    );
  }
}
