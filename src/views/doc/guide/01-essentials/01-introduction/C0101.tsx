import { Component, Vue } from "vue-property-decorator";
import { Collapse } from "ant-design-vue";
import C010101 from "./01/C010101.vue";

@Component({})
export default class C0101 extends Vue {
  public render() {
    return (
      <Collapse accordion={true}>
        <Collapse.Panel header={"Declarative Rendering"}>
          <C010101 />
        </Collapse.Panel>
      </Collapse>
    );
  }
}
