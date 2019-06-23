import { Component, Vue } from "vue-property-decorator";
import { Collapse } from "ant-design-vue";
import C0101 from "./01-silent/C0101.vue";
import C02 from "./02-option-merge-strategies/C0102.vue";
import C03 from "./03-devtools/C0103.vue";
import C05 from "./05-warn-handler/C0105.vue";
import C06 from "./06-ignored-elements/C0106.vue";
import C07 from "./07-key-codes/0107.vue";
import C08 from "./08-performance/C0108.vue";
import C09 from "./09-production-tip/C0109.vue";

@Component({})
export default class C01 extends Vue {
  public render() {
    return (
      <Collapse accordion={true}>
        <Collapse.Panel header={"silent"}>
          <C0101 />
        </Collapse.Panel>
        <Collapse.Panel header={"optionMergeStrategies"}>
          <C02 />
        </Collapse.Panel>
        <Collapse.Panel header={"devtools"}>
          <C03 />
        </Collapse.Panel>
        <Collapse.Panel header={"warnHandler"}>
          <C05 />
        </Collapse.Panel>
        <Collapse.Panel header={"ignoredElements"}>
          <C06 />
        </Collapse.Panel>
        <Collapse.Panel header={"keyCodes"}>
          <C07 />
        </Collapse.Panel>
        <Collapse.Panel header={"performance"}>
          <C08 />
        </Collapse.Panel>
        <Collapse.Panel header={"productionTip"}>
          <C09 />
        </Collapse.Panel>
      </Collapse>
    );
  }
}
