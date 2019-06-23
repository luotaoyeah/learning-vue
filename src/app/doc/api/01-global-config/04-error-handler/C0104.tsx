import { Component, Vue } from "vue-property-decorator";
import { Collapse } from "ant-design-vue";

/*
 * https://vuejs.org/v2/api/#errorHandler
 */
@Component({})
export default class C0104 extends Vue {
  public mounted() {
    if (Math.random() < 0.5) {
      /*
       * 未处理的错误会被处理器拦截
       */
      throw new Error(`[${C0104.name}] FOO`);
    }

    /*
     * 已处理的错误**不**会被处理器拦截
     */
    try {
      if (Math.random() < 0.5) {
        throw new Error(`[${C0104.name}] BAR`);
      }
    } catch (e) {
      /*  */
    }
  }

  public render() {
    return (
      <Collapse>
        <Collapse.Panel header={"Vue.config.errorHandler()"}>
          <p>
            <code>Vue.config.errorHandler</code>
            用来定义一个全局的错误处理函数, 定义了之后,
            组件中未被捕获的错误就会被它给捕获
          </p>

          <p>
            如果没有定义这个全局的错误处理函数, 则组件中未被捕获的错误会使用
            <code>console.error()</code> 方法打印到控制台, 而不是让整个应用崩溃
          </p>

          <ul>
            <li>
              如果未定义错误处理器, 则组件中未被捕获的错误默认会使用
              console.error 打印到控制台
            </li>
            <li>
              如果定义了错误处理器, 则组件中未被捕获的错误会被该处理器拦截
            </li>
            <li>
              处理器函数接收 3 个参数:
              <ul>
                <li>err: 错误对象</li>
                <li>vm: 组件实例</li>
                <li>info: 环境信息</li>
              </ul>
            </li>
          </ul>
        </Collapse.Panel>
      </Collapse>
    );
  }
}
