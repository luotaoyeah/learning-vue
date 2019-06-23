import Vue from "vue";
import "./App.scss";
import { ROUTES } from "../router/router-const";
import { Menu } from "ant-design-vue";
import { Component } from "vue-property-decorator";
import { last, reduce } from "lodash-es";

/**
 * 主页
 */
@Component<App>({})
export default class App extends Vue {
  private openKeys: Array<string> = [];
  private selectedKeys: Array<string> = [];

  public mounted() {
    const vm = this;

    if (this.$route.name) {
      this.openKeys = vm.calcOpenKeys(this.$route.name);
      this.selectedKeys = this.openKeys;
    }
  }

  /**
   * 计算当前展开的菜单项
   * @param currentKey 发生变更的菜单项的 KEY 值
   */
  private calcOpenKeys(currentKey: string): Array<string> {
    const routes: Array<string> = currentKey.split("-");

    return reduce<string, Array<string>>(
      routes,
      (prev: Array<string>, curr: string, index: number) => {
        if (prev.length === 0) {
          prev.push(curr);
        } else {
          prev.push(`${last(prev)}-${curr}`);
        }

        return prev;
      },
      []
    );
  }

  // tslint:disable-next-line:member-ordering
  public render() {
    const vm = this;

    return (
      <div id="app" style={{ height: "100%" }}>
        <div
          style={{
            display: "inline-block",
            width: "480px",
            height: "calc(100% - 2px)",
            borderRight: "1px solid #eeeeee",
            overflowY: "auto",
            overflowX: "hidden"
          }}
        >
          <Menu
            mode="inline"
            openKeys={vm.openKeys}
            {...{
              on: {
                "update:openKeys": (openKeys: Array<string>) => {
                  const name: string | undefined = last(openKeys);
                  if (name) {
                    this.openKeys = vm.calcOpenKeys(name);
                  }
                }
              }
            }}
            vModel={vm.selectedKeys}
            style={{ border: "none" }}
          >
            <Menu.SubMenu key="01">
              <template slot="title">GUIDE</template>
              <Menu.SubMenu key="01-01">
                <template slot="title">Introduction</template>
                <Menu.Item key={ROUTES._01_01_01.NAME}>
                  <router-link to={{ name: ROUTES._01_01_01.NAME }}>
                    Declarative Rendering
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES._01_01_02.NAME}>
                  <router-link to={{ name: ROUTES._01_01_02.NAME }}>
                    Conditionals And Loops
                  </router-link>
                </Menu.Item>
                <Menu.Item key="01-01-03">
                  <router-link to={{ name: "01-01-03" }}>
                    Handling User Input
                  </router-link>
                </Menu.Item>
                <Menu.Item key="01-01-04">
                  <router-link to={{ name: "01-01-04" }}>
                    Composing With Components
                  </router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="01-02">
                <template slot="title">The Vue Instance</template>
                <Menu.Item key="01-02-01">
                  <router-link to={{ name: "01-02-01" }}>
                    Data And Methods
                  </router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="01-03">
                <template slot="title">Template Syntax</template>
                <Menu.Item key="01-03-01">
                  <router-link to={{ name: "01-03-01" }}>
                    Interpolation
                  </router-link>
                </Menu.Item>
                <Menu.Item key="01-03-02">
                  <router-link to={{ name: "01-03-02" }}>Directive</router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="01-04">
                <template slot="title">
                  Computed Properties and Watchers
                </template>
                <Menu.Item key="01-04-01">
                  <router-link to={{ name: "01-04-01" }}>
                    Computed Properties
                  </router-link>
                </Menu.Item>
                <Menu.Item key="01-04-02">
                  <router-link to={{ name: "01-04-02" }}>Watchers</router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="01-05">
                <template slot="title">Classes and Styles</template>
                <Menu.Item key="01-05-01">
                  <router-link to={{ name: "01-05-01" }}>Classes</router-link>
                </Menu.Item>
                <Menu.Item key="01-05-02">
                  <router-link to={{ name: "01-05-02" }}>Styles</router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="01-06">
                <template slot="title">Conditional Rendering</template>
                <Menu.Item key="01-06-01">
                  <router-link to={{ name: "01-06-01" }}>v-if</router-link>
                </Menu.Item>
                <Menu.Item key="01-06-02">
                  <router-link to={{ name: "01-06-02" }}>v-show</router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="01-07">
                <router-link to={{ name: "01-07" }}>List Rendering</router-link>
              </Menu.Item>
              <Menu.Item key="01-08">
                <router-link to={{ name: "01-08" }}>Event Handling</router-link>
              </Menu.Item>
              <Menu.SubMenu key="01-09">
                <template slot="title">Form Input Binding</template>
                <Menu.Item key="01-09-01">
                  <router-link to={{ name: "01-09-01" }}>Basic</router-link>
                </Menu.Item>
                <Menu.Item key="01-09-02">
                  <router-link to={{ name: "01-09-02" }}>
                    Value Binding
                  </router-link>
                </Menu.Item>
                <Menu.Item key="01-09-03">
                  <router-link to={{ name: "01-09-03" }}>Modifiers</router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="01-10">
                <router-link to={{ name: "01-10" }}>
                  Component Basic
                </router-link>
              </Menu.Item>
              <Menu.Item key="01-11">
                <router-link to={{ name: "01-11" }}>
                  Component Registration
                </router-link>
              </Menu.Item>
              <Menu.Item key="01-12">
                <router-link to={{ name: "01-12" }}>Props</router-link>
              </Menu.Item>
              <Menu.Item key="01-13">
                <router-link to={{ name: "01-13" }}>Custom Events</router-link>
              </Menu.Item>
              <Menu.SubMenu key="01-14">
                <template slot="title">Slots</template>
                <Menu.Item key={ROUTES.GUIDE_SLOTS_SLOT_CONTENT.NAME}>
                  <router-link
                    to={{ name: ROUTES.GUIDE_SLOTS_SLOT_CONTENT.NAME }}
                  >
                    Slot Content
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES.GUIDE_SLOTS_NAMED_SLOT.NAME}>
                  <router-link
                    to={{ name: ROUTES.GUIDE_SLOTS_NAMED_SLOT.NAME }}
                  >
                    Named Slot
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES.GUIDE_SLOTS_DEFAULT_SLOT_CONTENT.NAME}>
                  <router-link
                    to={{
                      name: ROUTES.GUIDE_SLOTS_DEFAULT_SLOT_CONTENT.NAME
                    }}
                  >
                    Default Slot Content
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES.GUIDE_SLOTS_COMPILATION_SCOPE.NAME}>
                  <router-link
                    to={{ name: ROUTES.GUIDE_SLOTS_COMPILATION_SCOPE.NAME }}
                  >
                    Compilation Scope
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES.GUIDE_SLOTS_SCOPED_SLOT.NAME}>
                  <router-link
                    to={{ name: ROUTES.GUIDE_SLOTS_SCOPED_SLOT.NAME }}
                  >
                    Scoped Slot
                  </router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="01-15">
                <router-link to={{ name: "01-15" }}>
                  Dynamic & Async Components
                </router-link>
              </Menu.Item>
              <Menu.Item key="01-16">
                <router-link to={{ name: "01-16" }}>
                  Handling Edge Cases
                </router-link>
              </Menu.Item>
              <Menu.Item key="01-17">
                <router-link to={{ name: "01-17" }}>
                  Transitions and Animations
                </router-link>
              </Menu.Item>
              <Menu.Item key="01-18">
                <router-link to={{ name: "01-18" }}>
                  State Transitions
                </router-link>
              </Menu.Item>
              <Menu.Item key="01-19">
                <router-link to={{ name: "01-19" }}>Mixins</router-link>
              </Menu.Item>
              <Menu.Item key="01-20">
                <router-link to={{ name: "01-20" }}>
                  Custom Directives
                </router-link>
              </Menu.Item>
              <Menu.SubMenu key="01-21">
                <template slot="title">Render Functions & JSX</template>
                <Menu.Item key={ROUTES._01_21_01.NAME}>
                  <router-link to={{ name: ROUTES._01_21_01.NAME }}>
                    Basics
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES.GUIDE_RENDER_FUNCTIONS_VDOM.NAME}>
                  <router-link
                    to={{
                      name: ROUTES.GUIDE_RENDER_FUNCTIONS_VDOM.NAME
                    }}
                  >
                    Nodes, Trees, and the Virtual DOM
                  </router-link>
                </Menu.Item>
                <Menu.Item
                  key={ROUTES.GUIDE_RENDER_FUNCTIONS_CREATE_ELEMENT.NAME}
                >
                  <router-link
                    to={{
                      name: ROUTES.GUIDE_RENDER_FUNCTIONS_CREATE_ELEMENT.NAME
                    }}
                  >
                    createElement Arguments
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES.GUIDE_RENDER_FUNCTIONS_TEMPLATE.NAME}>
                  <router-link
                    to={{
                      name: ROUTES.GUIDE_RENDER_FUNCTIONS_TEMPLATE.NAME
                    }}
                  >
                    Replacing Template Features with Plain JavaScript
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES.GUIDE_RENDER_FUNCTIONS_JSX.NAME}>
                  <router-link
                    to={{
                      name: ROUTES.GUIDE_RENDER_FUNCTIONS_JSX.NAME
                    }}
                  >
                    JSX
                  </router-link>
                </Menu.Item>
                <Menu.Item
                  key={ROUTES.GUIDE_RENDER_FUNCTIONS_FUNCTIONAL_COMPONENT.NAME}
                >
                  <router-link
                    to={{
                      name:
                        ROUTES.GUIDE_RENDER_FUNCTIONS_FUNCTIONAL_COMPONENT.NAME
                    }}
                  >
                    Functional Components
                  </router-link>
                </Menu.Item>
                <Menu.Item
                  key={ROUTES.GUIDE_RENDER_FUNCTIONS_TEMPLATE_COMPILATION.NAME}
                >
                  <router-link
                    to={{
                      name:
                        ROUTES.GUIDE_RENDER_FUNCTIONS_TEMPLATE_COMPILATION.NAME
                    }}
                  >
                    Template Compilation
                  </router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="01-22">
                <router-link to={{ name: "01-22" }}>Plugins</router-link>
              </Menu.Item>
              <Menu.Item key="01-23">
                <router-link to={{ name: "01-23" }}>Filters</router-link>
              </Menu.Item>
              <Menu.Item key="01-24">
                <router-link to={{ name: "01-24" }}>
                  Reactivity in Depth
                </router-link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="02">
              <template slot="title">STYLE GUIDE</template>
              <Menu.Item key={ROUTES._02_01.NAME}>
                <router-link to={{ name: ROUTES._02_01.NAME }}>
                  Essential
                </router-link>
              </Menu.Item>
              <Menu.Item key="02-02">
                <router-link to={{ name: "02-02" }}>
                  Strongly Recommended
                </router-link>
              </Menu.Item>
              <Menu.Item key="02-03">
                <router-link to={{ name: "02-03" }}>Recommended</router-link>
              </Menu.Item>
              <Menu.Item key="02-04">
                <router-link to={{ name: "02-04" }}>
                  Use with Caution
                </router-link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="03">
              <template slot="title">API</template>
              <Menu.SubMenu key="03-01">
                <template slot="title">Global Config</template>
                <Menu.Item key={ROUTES._03_01_04.NAME}>
                  <router-link to={{ name: ROUTES._03_01_04.NAME }}>
                    errorHandler
                  </router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="03-02">
                <router-link to={{ name: "03-02" }}>Global API</router-link>
              </Menu.Item>
              <Menu.SubMenu key="03-03">
                <template slot="title">Options</template>
                <Menu.Item key={ROUTES._03_03_01.NAME}>
                  <router-link to={{ name: ROUTES._03_03_01.NAME }}>
                    Data
                  </router-link>
                </Menu.Item>
                <Menu.Item key="03-03-02">
                  <router-link to={{ name: "03-03-02" }}>DOM</router-link>
                </Menu.Item>
                <Menu.Item key="03-03-03">
                  <router-link to={{ name: "03-03-03" }}>
                    Lifecycle Hooks
                  </router-link>
                </Menu.Item>
                <Menu.Item key="03-03-04">
                  <router-link to={{ name: "03-03-04" }}>Assets</router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES._03_03_05.NAME}>
                  <router-link to={{ name: ROUTES._03_03_05.NAME }}>
                    Composition
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES._03_03_06.NAME}>
                  <router-link to={{ name: ROUTES._03_03_06.NAME }}>
                    Misc
                  </router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key={ROUTES._03_04.NAME}>
                <router-link to={{ name: ROUTES._03_04.NAME }}>
                  Instance Properties
                </router-link>
              </Menu.Item>
              <Menu.SubMenu key="03-05">
                <template slot="title">Instance Methods</template>
                <Menu.Item key={ROUTES._03_05_01.NAME}>
                  <router-link to={{ name: ROUTES._03_05_01.NAME }}>
                    Data
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES._03_05_02.NAME}>
                  <router-link to={{ name: ROUTES._03_05_02.NAME }}>
                    Events
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES._03_05_03.NAME}>
                  <router-link to={{ name: ROUTES._03_05_03.NAME }}>
                    Lifecycle
                  </router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="03-06">
                <router-link to={{ name: "03-06" }}>Directives</router-link>
              </Menu.Item>
              <Menu.Item key={ROUTES._03_07.NAME}>
                <router-link to={{ name: ROUTES._03_07.NAME }}>
                  Special Attributes
                </router-link>
              </Menu.Item>
              <Menu.Item key={ROUTES._03_08.NAME}>
                <router-link to={{ name: ROUTES._03_08.NAME }}>
                  Built-in Components
                </router-link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="04">
              <template slot="title">WHAT'S NEW</template>
              <Menu.SubMenu key="04-01">
                <template slot="title">vue@2.6</template>
                <Menu.Item key={ROUTES._04_01_01.NAME}>
                  <router-link to={{ name: ROUTES._04_01_01.NAME }}>
                    Vue.observable()
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES._04_01_02.NAME}>
                  <router-link to={{ name: ROUTES._04_01_02.NAME }}>
                    A short syntax for v-bind .prop modifier
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES._04_01_03.NAME}>
                  <router-link to={{ name: ROUTES._04_01_03.NAME }}>
                    Use custom toString() when interpolating objects
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES._04_01_04.NAME}>
                  <router-link to={{ name: ROUTES._04_01_04.NAME }}>
                    async error handling
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES._04_01_05.NAME}>
                  <router-link to={{ name: ROUTES._04_01_05.NAME }}>
                    v-for support iterable
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES._04_01_06.NAME}>
                  <router-link to={{ name: ROUTES._04_01_06.NAME }}>
                    v-slot
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES._04_01_07.NAME}>
                  <router-link to={{ name: ROUTES._04_01_07.NAME }}>
                    add scopedSlots to context in functional components
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES._04_01_08.NAME}>
                  <router-link to={{ name: ROUTES._04_01_08.NAME }}>
                    Support dynamic values in directive arguments
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES._04_01_09.NAME}>
                  <router-link to={{ name: ROUTES._04_01_09.NAME }}>
                    expose all normal slots on $scopedSlots as functions
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES._04_01_10.NAME}>
                  <router-link to={{ name: ROUTES._04_01_10.NAME }}>
                    v-bind.sync also listens for kebab-case update event
                  </router-link>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.SubMenu key="05">
              <template slot="title">PKGS</template>
              <Menu.SubMenu key="05-03">
                <template slot="title">ant-design-vue</template>
                <Menu.Item key={ROUTES._05_03_40.NAME}>
                  <router-link to={{ name: ROUTES._05_03_40.NAME }}>
                    tooltip
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES._05_03_45.NAME}>
                  <router-link to={{ name: ROUTES._05_03_45.NAME }}>
                    modal
                  </router-link>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>
          </Menu>
        </div>
        <div
          style={{
            display: "inline-block",
            width: "calc(100% - 480px)",
            height: "100%",
            overflow: "auto",
            position: "absolute",
            padding: "10px"
          }}
        >
          <router-view />
        </div>
      </div>
    );
  }
}
