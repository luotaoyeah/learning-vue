import { Component, Vue } from "vue-property-decorator";
import { Divider, Input } from "ant-design-vue";

/*
 * https://vuejs.org/v2/api/#errorHandler
 */
@Component({})
export class C010401 extends Vue {
  public handleFocus() {
    throw new Error(`[${C010401.name}]`);
  }

  public render() {
    return (
      <div>
        <p>
          <code>Vue.config.errorHandler()</code>
          可以捕获哪些类型的错误呢?
        </p>

        <ul>
          <li>
            <code>render() 方法中的错误</code>
          </li>
          <li>watcher 中的错误</li>
          <li>lifecycle hooks 中的错误</li>
          <li>custom event handlers 中的错误</li>
          <li>native event handlers 中的错误</li>
        </ul>

        <Divider dashed={true}></Divider>

        <Input nativeOnFocus={this.handleFocus}></Input>
      </div>
    );
  }
}
