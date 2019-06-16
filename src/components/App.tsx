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
              <Menu.SubMenu key="01-1">
                <template slot="title">Introduction</template>
                <Menu.Item
                  key={ROUTES.GUIDE_INTRODUCTION_DECLARATIVE_RENDERING.NAME}
                >
                  <router-link
                    to={{
                      name: ROUTES.GUIDE_INTRODUCTION_DECLARATIVE_RENDERING.NAME
                    }}
                  >
                    Declarative Rendering
                  </router-link>
                </Menu.Item>
                <Menu.Item
                  key={ROUTES.GUIDE_INTRODUCTION_CONDITIONAL_AND_LOOP.NAME}
                >
                  <router-link
                    to={{
                      name: ROUTES.GUIDE_INTRODUCTION_CONDITIONAL_AND_LOOP.NAME
                    }}
                  >
                    Conditionals And Loops
                  </router-link>
                </Menu.Item>
                <Menu.Item key="01-1-3">
                  <router-link to={{ name: "HandingUserInput" }}>
                    Handing User Input
                  </router-link>
                </Menu.Item>
                <Menu.Item key="01-1-4">
                  <router-link to={{ name: "ComposingWithComponents" }}>
                    Composing With Components
                  </router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="01-2">
                <template slot="title">The Vue Instance</template>
                <Menu.Item key="01-2-1">
                  <router-link to={{ name: "DataAndMethods" }}>
                    Data And Methods
                  </router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="01-3">
                <template slot="title">Template Syntax</template>
                <Menu.Item key="01-3-1">
                  <router-link to={{ name: "template-syntax-interpolation" }}>
                    Interpolation
                  </router-link>
                </Menu.Item>
                <Menu.Item key="01-3-2">
                  <router-link to={{ name: "template-syntax-directive" }}>
                    Directive
                  </router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="01-4">
                <template slot="title">
                  Computed Properties and Watchers
                </template>
                <Menu.Item key="01-4-1">
                  <router-link to={{ name: "guide-computed-properties" }}>
                    Computed Properties
                  </router-link>
                </Menu.Item>
                <Menu.Item key="01-4-2">
                  <router-link to={{ name: "guide-watchers" }}>
                    Watchers
                  </router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="01-5">
                <template slot="title">Classes and Styles</template>
                <Menu.Item key="01-5-1">
                  <router-link to={{ name: "guide-class" }}>
                    Classes
                  </router-link>
                </Menu.Item>
                <Menu.Item key="01-5-2">
                  <router-link to={{ name: "guide-style" }}>Styles</router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="01-6">
                <template slot="title">Conditional Rendering</template>
                <Menu.Item key="01-6-1">
                  <router-link
                    to={{ name: "guide-conditional-rendering-v-if" }}
                  >
                    v-if
                  </router-link>
                </Menu.Item>
                <Menu.Item key="01-6-2">
                  <router-link
                    to={{ name: "guide-conditional-rendering-v-show" }}
                  >
                    v-show
                  </router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="01-7">
                <router-link to={{ name: "guide-list-rendering" }}>
                  List Rendering
                </router-link>
              </Menu.Item>
              <Menu.Item key="01-8">
                <router-link to={{ name: "guide-event-handling" }}>
                  Event Handling
                </router-link>
              </Menu.Item>
              <Menu.SubMenu key="01-9">
                <template slot="title">Form Input Binding</template>
                <Menu.Item key="01-9-1">
                  <router-link to={{ name: "guide-form-input-basic" }}>
                    Basic
                  </router-link>
                </Menu.Item>
                <Menu.Item key="01-9-2">
                  <router-link to={{ name: "guide-form-input-value-binding" }}>
                    Value Binding
                  </router-link>
                </Menu.Item>
                <Menu.Item key="01-9-3">
                  <router-link to={{ name: "guide-form-input-modifier" }}>
                    Modifiers
                  </router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="01-10">
                <router-link to={{ name: "guide-component-basic" }}>
                  Component Basic
                </router-link>
              </Menu.Item>
              <Menu.Item key="01-11">
                <router-link to={{ name: "guide-component-registration" }}>
                  Component Registration
                </router-link>
              </Menu.Item>
              <Menu.Item key="01-12">
                <router-link to={{ name: "guide-props" }}>Props</router-link>
              </Menu.Item>
              <Menu.Item key="01-13">
                <router-link to={{ name: "guide-custom-events" }}>
                  Custom Events
                </router-link>
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
                <router-link to={{ name: "guide-dynamic-async-component" }}>
                  Dynamic & Async Components
                </router-link>
              </Menu.Item>
              <Menu.Item key="01-16">
                <router-link to={{ name: "guide-handling-edge-cases" }}>
                  Handling Edge Cases
                </router-link>
              </Menu.Item>
              <Menu.Item key="01-17">
                <router-link to={{ name: "guide-transition-and-animation" }}>
                  Transitions and Animations
                </router-link>
              </Menu.Item>
              <Menu.Item key="01-18">
                <router-link to={{ name: "guide-state-transition" }}>
                  State Transitions
                </router-link>
              </Menu.Item>
              <Menu.Item key="01-19">
                <router-link to={{ name: "guide-mixins" }}>Mixins</router-link>
              </Menu.Item>
              <Menu.Item key="01-20">
                <router-link to={{ name: "guide-custom-directives" }}>
                  Custom Directives
                </router-link>
              </Menu.Item>
              <Menu.SubMenu key="01-21">
                <template slot="title">Render Functions & JSX</template>
                <Menu.Item key={ROUTES.GUIDE_RENDER_FUNCTIONS_BASIC.NAME}>
                  <router-link
                    to={{
                      name: ROUTES.GUIDE_RENDER_FUNCTIONS_BASIC.NAME
                    }}
                  >
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
                <router-link to={{ name: "guide-plugins" }}>
                  Plugins
                </router-link>
              </Menu.Item>
              <Menu.Item key="01-23">
                <router-link to={{ name: "guide-filters" }}>
                  Filters
                </router-link>
              </Menu.Item>
              <Menu.Item key="01-24">
                <router-link to={{ name: "guide-reactivity-in-depth" }}>
                  Reactivity in Depth
                </router-link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="02">
              <template slot="title">STYLE GUIDE</template>
              <Menu.Item key="02-1">
                <router-link to={{ name: "style-guide-essential" }}>
                  Essential
                </router-link>
              </Menu.Item>
              <Menu.Item key="02-2">
                <router-link to={{ name: "style-guide-strongly-recommend" }}>
                  Strongly Recommended
                </router-link>
              </Menu.Item>
              <Menu.Item key="02-3">
                <router-link to={{ name: "style-guide-recommend" }}>
                  Recommended
                </router-link>
              </Menu.Item>
              <Menu.Item key="02-4">
                <router-link to={{ name: "style-guide-use-with-caution" }}>
                  Use with Caution
                </router-link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="03">
              <template slot="title">API</template>
              <Menu.Item key="03-1">
                <router-link to={{ name: "api-global-config" }}>
                  Global Config
                </router-link>
              </Menu.Item>
              <Menu.Item key="03-2">
                <router-link to={{ name: "api-global-api" }}>
                  Global API
                </router-link>
              </Menu.Item>
              <Menu.SubMenu key="03-3">
                <template slot="title">Options</template>
                <Menu.Item key={ROUTES.API_OPTIONS_DATA.NAME}>
                  <router-link to={{ name: ROUTES.API_OPTIONS_DATA.NAME }}>
                    Data
                  </router-link>
                </Menu.Item>
                <Menu.Item key="03-3-2">
                  <router-link to={{ name: "api-options-dom" }}>
                    DOM
                  </router-link>
                </Menu.Item>
                <Menu.Item key="03-3-3">
                  <router-link to={{ name: "api-options-lifecycle-hooks" }}>
                    Lifecycle Hooks
                  </router-link>
                </Menu.Item>
                <Menu.Item key="03-3-4">
                  <router-link to={{ name: "api-options-assets" }}>
                    Assets
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES.API_OPTIONS_COMPOSITION.NAME}>
                  <router-link
                    to={{ name: ROUTES.API_OPTIONS_COMPOSITION.NAME }}
                  >
                    Composition
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES.API_OPTIONS_MISC.NAME}>
                  <router-link to={{ name: ROUTES.API_OPTIONS_MISC.NAME }}>
                    Misc
                  </router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key={ROUTES.API_INSTANCE_PROPERTIES.NAME}>
                <router-link to={{ name: ROUTES.API_INSTANCE_PROPERTIES.NAME }}>
                  Instance Properties
                </router-link>
              </Menu.Item>
              <Menu.SubMenu key="03-5">
                <template slot="title">Instance Methods</template>
                <Menu.Item key={ROUTES.API_INSTANCE_METHODS_DATA.NAME}>
                  <router-link
                    to={{ name: ROUTES.API_INSTANCE_METHODS_DATA.NAME }}
                  >
                    Data
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES.API_INSTANCE_METHODS_EVENTS.NAME}>
                  <router-link
                    to={{ name: ROUTES.API_INSTANCE_METHODS_EVENTS.NAME }}
                  >
                    Events
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES.API_INSTANCE_METHODS_LIFECYCLE.NAME}>
                  <router-link
                    to={{ name: ROUTES.API_INSTANCE_METHODS_LIFECYCLE.NAME }}
                  >
                    Lifecycle
                  </router-link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="03-6">
                <router-link to={{ name: "api-directives" }}>
                  Directives
                </router-link>
              </Menu.Item>
              <Menu.Item key={ROUTES.API_SPECIAL_ATTRIBUTES.NAME}>
                <router-link to={{ name: ROUTES.API_SPECIAL_ATTRIBUTES.NAME }}>
                  Special Attributes
                </router-link>
              </Menu.Item>
              <Menu.Item key={ROUTES.API_BUILTIN_COMPONENTS.NAME}>
                <router-link to={{ name: ROUTES.API_BUILTIN_COMPONENTS.NAME }}>
                  Built-in Components
                </router-link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="04">
              <template slot="title">WHAT'S NEW</template>
              <Menu.SubMenu key="04-01">
                <template slot="title">vue@2.6</template>
                <Menu.Item key={ROUTES.WHATS_NEW_2_6_OBSERVABLE.NAME}>
                  <router-link
                    to={{ name: ROUTES.WHATS_NEW_2_6_OBSERVABLE.NAME }}
                  >
                    Vue.observable()
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES.WHATS_NEW_2_6_BIND_PROP_SHORTCUT.NAME}>
                  <router-link
                    to={{
                      name: ROUTES.WHATS_NEW_2_6_BIND_PROP_SHORTCUT.NAME
                    }}
                  >
                    A short syntax for v-bind .prop modifier
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES.WHATS_NEW_2_6_CUSTOM_TOSTRING.NAME}>
                  <router-link
                    to={{
                      name: ROUTES.WHATS_NEW_2_6_CUSTOM_TOSTRING.NAME
                    }}
                  >
                    Use custom toString() when interpolating objects
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES.WHATS_NEW_2_6_ASYNC_ERROR_HANDLING.NAME}>
                  <router-link
                    to={{
                      name: ROUTES.WHATS_NEW_2_6_ASYNC_ERROR_HANDLING.NAME
                    }}
                  >
                    async error handling
                  </router-link>
                </Menu.Item>
                <Menu.Item
                  key={ROUTES.WHATS_NEW_2_6_V_FOR_SUPPORT_ITERABLE.NAME}
                >
                  <router-link
                    to={{
                      name: ROUTES.WHATS_NEW_2_6_V_FOR_SUPPORT_ITERABLE.NAME
                    }}
                  >
                    v-for support iterable
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES.WHATS_NEW_2_6_V_SLOT.NAME}>
                  <router-link
                    to={{
                      name: ROUTES.WHATS_NEW_2_6_V_SLOT.NAME
                    }}
                  >
                    v-slot
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES.WHATS_NEW_2_6_SCOPED_SLOTS.NAME}>
                  <router-link
                    to={{
                      name: ROUTES.WHATS_NEW_2_6_SCOPED_SLOTS.NAME
                    }}
                  >
                    add scopedSlots to context in functional components
                  </router-link>
                </Menu.Item>
                <Menu.Item
                  key={ROUTES.WHATS_NEW_2_6_DYNAMIC_DIRECTIVE_ARGUMENT.NAME}
                >
                  <router-link
                    to={{
                      name: ROUTES.WHATS_NEW_2_6_DYNAMIC_DIRECTIVE_ARGUMENT.NAME
                    }}
                  >
                    Support dynamic values in directive arguments
                  </router-link>
                </Menu.Item>
                <Menu.Item
                  key={ROUTES.WHATS_NEW_2_6_ALL_SLOTS_ON_$SCOPEDSLOTS.NAME}
                >
                  <router-link
                    to={{
                      name: ROUTES.WHATS_NEW_2_6_ALL_SLOTS_ON_$SCOPEDSLOTS.NAME
                    }}
                  >
                    expose all normal slots on $scopedSlots as functions
                  </router-link>
                </Menu.Item>
                <Menu.Item key={ROUTES.WHATS_NEW_2_6_KEBAB_CASE_UPDATE.NAME}>
                  <router-link
                    to={{
                      name: ROUTES.WHATS_NEW_2_6_KEBAB_CASE_UPDATE.NAME
                    }}
                  >
                    v-bind.sync also listens for kebab-case update event
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
