import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Tabs, TabPane } from "element-ui";
import { C1001 } from "./10-01/C1001";

@Component({})
export default class C10 extends Vue {
  public render() {
    return (
      <Tabs tabPosition="right">
        <TabPane label="v-bind.sync also listens for kebab-case update event">
          <C1001 />
        </TabPane>
      </Tabs>
    );
  }
}
