import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Collapse } from "ant-design-vue";
import C034001 from "./C034001";

@Component({})
export default class C0340 extends Vue {
  public render() {
    return (
      <Collapse accordion={true}>
        <Collapse.Panel header={"destroyTooltipOnHide"}>
          <C034001></C034001>
        </Collapse.Panel>
      </Collapse>
    );
  }
}
