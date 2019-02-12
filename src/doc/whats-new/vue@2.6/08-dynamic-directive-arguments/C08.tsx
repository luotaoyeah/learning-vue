import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Tabs, TabPane } from "element-ui";
import C0801 from "./C0801.vue";

@Component({})
export default class C08 extends Vue {
  public render() {
    return (
      <Tabs tabPosition="right">
        <TabPane label="Support dynamic values in directive arguments">
          <C0801 />
        </TabPane>
      </Tabs>
    );
  }
}
