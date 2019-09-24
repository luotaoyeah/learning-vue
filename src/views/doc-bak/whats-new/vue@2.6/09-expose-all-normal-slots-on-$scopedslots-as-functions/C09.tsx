import Vue from "vue";
import { Component } from "vue-property-decorator";
import { C0901 } from "./09-01/C0901";
import { Collapse } from "ant-design-vue";

@Component({})
export default class C09 extends Vue {
  public render() {
    return (
      <Collapse>
        <Collapse.Panel header="expose all normal slots on $scopedSlots as functions">
          <C0901 />
        </Collapse.Panel>
      </Collapse>
    );
  }
}
