import { Component, Vue } from "vue-property-decorator";
import { Button, Collapse, Divider } from "ant-design-vue";
import { C010401 } from "./C0104.01";

/*
 * https://vuejs.org/v2/api/#errorHandler
 */
@Component({})
export default class C0104 extends Vue {
  public handleClick01() {
    /*
     * 此处抛出的错误, 会被全局的错误处理函数捕获
     */
    throw new Error(`[${C0104.name}] FOO`);
  }

  public handleClick02() {
    try {
      /*
       * 此处抛出的错误, **不**会被全局的错误处理函数捕获,
       * 因为此处被组件自己捕获并处理掉了
       */
      throw new Error(`[${C0104.name}] BAR`);
    } catch (e) {
      console.log(`%c[${C0104.name}]\n${e.message}`, "color:red");
    }
  }

  public render() {
    return (
      <Collapse>
        <Collapse.Panel header={"Vue.config.errorHandler()"}>
          <p>
            <code>Vue.config.errorHandler</code>
            用来定义一个全局的错误处理函数, 定义了之后, 组件中未被捕获的错误就会被它给捕获
          </p>

          <p>
            如果没有定义这个全局的错误处理函数, 则组件中未被捕获的错误会使用
            <code>console.error()</code> 方法打印到控制台, 而不是让整个应用崩溃
          </p>

          <p>处理器函数接收 3 个参数:</p>
          <ul>
            <li>err: 错误对象</li>
            <li>vm: 组件实例</li>
            <li>info: 环境信息</li>
          </ul>

          <Divider dashed={true}></Divider>

          <Button onClick={this.handleClick01}>THROW FOO</Button>
          <Button
            onClick={this.handleClick02}
            style={{
              marginLeft: "8px"
            }}
          >
            THROW BAR
          </Button>

          <Divider dashed={true}></Divider>

          <Collapse>
            <Collapse.Panel header={"01"}>
              <C010401></C010401>
            </Collapse.Panel>
          </Collapse>
        </Collapse.Panel>
      </Collapse>
    );
  }
}
