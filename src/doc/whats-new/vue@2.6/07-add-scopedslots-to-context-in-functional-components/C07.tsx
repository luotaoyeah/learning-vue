import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Tabs, TabPane } from "element-ui";
import { C0701 } from "./C0701";

@Component({})
export default class C07 extends Vue {
  public render() {
    return (
      <Tabs tabPosition="right">
        <TabPane label="RenderContext.scopedSlots">
          <C0701 />
        </TabPane>
      </Tabs>
    );
  }
}
