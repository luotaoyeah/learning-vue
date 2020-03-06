import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Collapse } from "ant-design-vue";
import { C034501 } from "./C034501";

@Component({})
export default class C0345 extends Vue {
  public render() {
    return (
      <Collapse accordion={true}>
        <Collapse.Panel header={"closable"}>
          <C034501></C034501>
        </Collapse.Panel>
      </Collapse>
    );
  }
}
