import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Tabs, TabPane } from "element-ui";
import { C0901 } from "./09-01/C0901";

@Component({})
export default class C09 extends Vue {
  public render() {
    return (
      <Tabs tabPosition="right">
        <TabPane label="expose all normal slots on $scopedSlots as functions">
          <C0901 />
        </TabPane>
      </Tabs>
    );
  }
}
