import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Tabs, TabPane } from "element-ui";
import { C210601 } from "./C210601";
import C210602 from "./06-01-passing-attributes-and-events-to-child-elements.vue";
import C210603 from "./06-02-slots-vs-children.vue";

@Component({})
export default class C2106 extends Vue {
  public render() {
    return (
      <Tabs tabPosition="right">
        <TabPane label="Functional Components">
          <C210601 />
        </TabPane>
        <TabPane label="Passing Attributes and Events to Child Elements/Components">
          <C210602 />
        </TabPane>
        <TabPane label="slots() vs children">
          <C210603 />
        </TabPane>
      </Tabs>
    );
  }
}
