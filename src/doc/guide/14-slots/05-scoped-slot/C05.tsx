import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Collapse } from "ant-design-vue";
import C0501 from "./C0501";
import C0502 from "./C0502";

@Component({})
export default class C05 extends Vue {
  public render() {
    return (
      <Collapse accordion={true}>
        <Collapse.Panel header="scoped slot">
          <C0501 />
        </Collapse.Panel>
        <Collapse.Panel header="named scoped slot">
          <C0502 />
        </Collapse.Panel>
      </Collapse>
    );
  }
}
