import { Component, Vue } from "vue-property-decorator";
import { C210501 } from "./C210501";
import { Collapse } from "ant-design-vue";

@Component({})
export default class C2105 extends Vue {
  public render() {
    return (
      <div>
        <Collapse accordion={true}>
          <Collapse.Panel header={"JSX"}>
            <ul>
              <li>比起直接使用 render function, 使用 JSX 可以让代码显得更加简洁</li>
              <li>
                需要使用插件：babel-plugin-transform-vue-jsx, 使用 vue-cli + webpack 搭建的项目已经默认启用了对 JSX
                的支持
                <p>
                  <C210501 />
                </p>
              </li>
              <li>根据惯例, 在 render 方法中使用 JSX 时, 第一个参数 (createElement) 一般使用别名 h</li>
            </ul>
          </Collapse.Panel>
        </Collapse>
      </div>
    );
  }
}
