import Vue from "vue";
import { Component } from "vue-property-decorator";
import { C1001 } from "./10-01/C1001";
import { Collapse } from "ant-design-vue";

@Component({})
export default class C10 extends Vue {
  public render() {
    return (
      <Collapse>
        <Collapse.Panel header="v-bind.sync also listens for kebab-case update event">
          <C1001 />
        </Collapse.Panel>
      </Collapse>
    );
  }
}
