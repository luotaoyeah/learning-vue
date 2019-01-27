import Vue from "vue";
import { Component } from "vue-property-decorator";
import { TabPane, Tabs } from "element-ui";
import C0501 from "./C0501";
import C0502 from "./C0502";

@Component({})
export default class C05 extends Vue {
  public render() {
    return (
      <Tabs>
        <TabPane label="scoped slot">
          <C0501 />
        </TabPane>
        <TabPane label="named scoped slot">
          <C0502 />
        </TabPane>
      </Tabs>
    );
  }
}
