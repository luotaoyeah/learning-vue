import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import { Collapse } from "ant-design-vue";
import { C2401 } from "./C2401-how-changes-are-tracked";
import { C2402 } from "./C2402-change-detection-caveats";
import { C2403 } from "./C2403-declaring-reactive-properties";
import { C2404 } from "./C2404-async-update-qunee";

@Component({})
export default class C24 extends Vue {
  public render() {
    return (
      <Collapse accordion={true}>
        <Collapse.Panel header={"How Changes are Tracked"}>
          <C2401 />
        </Collapse.Panel>
        <Collapse.Panel header={"Change Detection Caveats"}>
          <C2402 />
        </Collapse.Panel>
        <Collapse.Panel header={"Declaring Reactive Properties"}>
          <C2403 />
        </Collapse.Panel>
        <Collapse.Panel header={"Async Update Qunee"}>
          <C2404 />
        </Collapse.Panel>
      </Collapse>
    );
  }
}
