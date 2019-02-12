import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Tabs, TabPane } from "element-ui";
import C0801 from "./08-01/C0801.vue";
import C0802 from "./08-02/C0802.vue";

@Component({})
export default class C08 extends Vue {
  public render() {
    return (
      <Tabs tabPosition="right">
        <TabPane label=":[key] & @[key]">
          <C0801 />
        </TabPane>
        <TabPane label="#[key]">
          <C0802 />
        </TabPane>
      </Tabs>
    );
  }
}
