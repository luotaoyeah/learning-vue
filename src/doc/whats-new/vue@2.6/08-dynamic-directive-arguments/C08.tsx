import Vue from "vue";
import { Component } from "vue-property-decorator";
import C0801 from "./08-01/C0801.vue";
import C0802 from "./08-02/C0802.vue";
import { Collapse } from "ant-design-vue";

@Component({})
export default class C08 extends Vue {
  public render() {
    return (
      <Collapse accordion={true}>
        <Collapse.Panel header=":[key] & @[key]">
          <C0801 />
        </Collapse.Panel>
        <Collapse.Panel header="#[key]">
          <C0802 />
        </Collapse.Panel>
      </Collapse>
    );
  }
}
