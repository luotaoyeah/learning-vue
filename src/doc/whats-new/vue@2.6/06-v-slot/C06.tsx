import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Tabs, TabPane } from "element-ui";
import C0601 from "./C0601.vue";
import C0602 from "./C0602.vue";
import C0603 from "./C0603.vue";

@Component({})
export default class C06 extends Vue {
  public render() {
    return (
      <Tabs tabPosition="right">
        <TabPane label="v-slot">
          <C0601 />
        </TabPane>
        <TabPane label='v-slot:"{ data }"'>
          <C0602 />
        </TabPane>
        <TabPane label="default slot">
          <C0603 />
        </TabPane>
      </Tabs>
    );
  }
}
