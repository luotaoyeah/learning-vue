import { Component, Vue } from "vue-property-decorator";
import { Collapse } from "ant-design-vue";

/*
 * https://vuejs.org/v2/api/#warnHandler
 */
@Component({})
export default class C0105 extends Vue {
  public render() {
    return (
      <Collapse>
        <Collapse.Panel header={"Vue.config.warnHandler()"}>
          <p>
            <code>Vue.config.warnHandler()</code> 方法, 用来捕获运行时期 vue
            抛出的警告信息
          </p>

          <p>该方法只在开发环境有效, 在生产环境会被忽略</p>
        </Collapse.Panel>
      </Collapse>
    );
  }
}
