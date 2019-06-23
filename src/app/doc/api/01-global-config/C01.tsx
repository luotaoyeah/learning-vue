import { Component, Vue } from "vue-property-decorator";
import { Collapse } from "ant-design-vue";
import C0101 from "./01-silent.vue";
import C02 from "./02-optionMergeStrategies.vue";
import C03 from "./03-devtools.vue";
import C05 from "./05-warnHandler.vue";
import C06 from "./06-ignoredElements.vue";
import C07 from "./07-keyCodes.vue";
import C08 from "./08-performance.vue";
import C09 from "./09-productionTip.vue";

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
