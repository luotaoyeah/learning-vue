import { Component, Vue } from "vue-property-decorator";
import { Collapse } from "ant-design-vue";
import Picture01 from "./C0106.png";

@Component({})
export default class C0106 extends Vue {
  public render() {
    return (
      <Collapse>
        <Collapse.Panel header={"Vue.config.ignoredElements"}>
          <p>默认情况下, 如果一个自定义元素无法被识别为某个组件, 则会报错:</p>
          <c-01-06-01></c-01-06-01>
          <img src={Picture01} style={{ maxWidth: "100%" }} />

          <p>
            如果将该元素添加到 <code>Vue.config.ignoredElements</code> 中, 则
            vue 会忽略该元素
          </p>
        </Collapse.Panel>
      </Collapse>
    );
  }
}
