import { InfoCircleOutlined } from '@ant-design/icons-vue';
import { Layout, Menu } from 'ant-design-vue';

export default {
  data() {
    return {
      selectedKeys: ['home'],
      collapsed: false,
    };
  },
  render() {
    return (
      <>
        <Layout style={{ height: '100%' }}>
          <Layout.Sider v-model={[this.collapsed, 'collapsed']} style={{ paddingTop: '50px' }} width={400} collapsible>
            <Menu v-model={[this.selectedKeys, 'selectedKeys']} mode="inline" theme="dark">
              <Menu.Item key="home">
                <router-link to="/">
                  <InfoCircleOutlined></InfoCircleOutlined>
                  <span>HOME</span>
                </router-link>
              </Menu.Item>

              <Menu.SubMenu
                key="guide"
                v-slots={{
                  title: () => (
                    <span>
                      <InfoCircleOutlined></InfoCircleOutlined>
                      <span>GUIDE</span>
                    </span>
                  ),
                }}
              >
                <Menu.SubMenu
                  key="essentials"
                  v-slots={{
                    title: () => <span>ESSENTIALS</span>,
                  }}
                >
                  <Menu.SubMenu
                    key="introduction"
                    v-slots={{
                      title: () => <span>INTRODUCTION</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/introduction/declarative-rendering">
                      <router-link to="/doc/guide/introduction/declarative-rendering">
                        <span>DECLARATIVE RENDERING</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/introduction/handling-user-input">
                      <router-link to="/doc/guide/introduction/handling-user-input">
                        <span>HANDLING USER INPUT</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/introduction/conditionals-and-loops">
                      <router-link to="/doc/guide/introduction/conditionals-and-loops">
                        <span>CONDITIONALS AND LOOPS</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>

                  <Menu.SubMenu
                    key="template-syntax"
                    v-slots={{
                      title: () => <span>TEMPLATE SYNTAX</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/template-syntax/interpolations">
                      <router-link to="/doc/guide/template-syntax/interpolations">
                        <span>INTERPOLATIONS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/template-syntax/directives">
                      <router-link to="/doc/guide/template-syntax/directives">
                        <span>DIRECTIVES</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/template-syntax/shorthands">
                      <router-link to="/doc/guide/template-syntax/shorthands">
                        <span>SHORTHANDS</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>

                  <Menu.SubMenu
                    key="data-methods"
                    v-slots={{
                      title: () => <span>DATA PROPERTIES AND METHODS</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/data-methods/data-properties">
                      <router-link to="/doc/guide/data-methods/data-properties">
                        <span>DATA PROPERTIES</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/data-methods/methods">
                      <router-link to="/doc/guide/data-methods/methods">
                        <span>METHODS</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>

                  <Menu.SubMenu
                    key="computed"
                    v-slots={{
                      title: () => <span>COMPUTED PROPERTIES AND WATCHERS</span>,
                    }}
                  >
                    <Menu.SubMenu
                      key="computed-properties"
                      v-slots={{
                        title: () => <span>COMPUTED PROPERTIES</span>,
                      }}
                    >
                      <Menu.Item key="/doc/guide/computed/basic-example">
                        <router-link to="/doc/guide/computed/basic-example">
                          <span>BASIC EXAMPLE</span>
                        </router-link>
                      </Menu.Item>

                      <Menu.Item key="/doc/guide/computed/computed-caching-vs-methods">
                        <router-link to="/doc/guide/computed/computed-caching-vs-methods">
                          <span>COMPUTED CACHING VS METHODS</span>
                        </router-link>
                      </Menu.Item>

                      <Menu.Item key="/doc/guide/computed/computed-setter">
                        <router-link to="/doc/guide/computed/computed-setter">
                          <span>COMPUTED SETTER</span>
                        </router-link>
                      </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.Item key="/doc/guide/computed/watchers">
                      <router-link to="/doc/guide/computed/watchers">
                        <span>WATCHERS</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>

                  <Menu.SubMenu
                    key="class-and-style"
                    v-slots={{
                      title: () => <span>CLASS AND STYLE BINDINGS</span>,
                    }}
                  >
                    <Menu.SubMenu
                      key="binding-html-classes"
                      v-slots={{
                        title: () => <span>BINDING HTML CLASSES</span>,
                      }}
                    >
                      <Menu.Item key="/doc/guide/class-and-style/object-syntax">
                        <router-link to="/doc/guide/class-and-style/object-syntax">
                          <span>OBJECT SYNTAX</span>
                        </router-link>
                      </Menu.Item>

                      <Menu.Item key="/doc/guide/class-and-style/array-syntax">
                        <router-link to="/doc/guide/class-and-style/array-syntax">
                          <span>ARRAY SYNTAX</span>
                        </router-link>
                      </Menu.Item>

                      <Menu.Item key="/doc/guide/class-and-style/with-components">
                        <router-link to="/doc/guide/class-and-style/with-components">
                          <span>WITH COMPONENTS</span>
                        </router-link>
                      </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu
                      key="binding-inline-styles"
                      v-slots={{
                        title: () => <span>BINDING INLINE STYLES</span>,
                      }}
                    >
                      <Menu.Item key="/doc/guide/class-and-style/binding-inline-styles/object-syntax">
                        <router-link to="/doc/guide/class-and-style/binding-inline-styles/object-syntax">
                          <span>OBJECT SYNTAX</span>
                        </router-link>
                      </Menu.Item>

                      <Menu.Item key="/doc/guide/class-and-style/binding-inline-styles/array-syntax">
                        <router-link to="/doc/guide/class-and-style/binding-inline-styles/array-syntax">
                          <span>ARRAY SYNTAX</span>
                        </router-link>
                      </Menu.Item>
                    </Menu.SubMenu>
                  </Menu.SubMenu>

                  <Menu.SubMenu
                    key="/doc/guide/conditional"
                    v-slots={{
                      title: () => <span>CONDITIONAL RENDERING</span>,
                    }}
                  >
                    <Menu.SubMenu
                      key="/doc/guide/conditional/v-if"
                      v-slots={{
                        title: () => <span>v-if</span>,
                      }}
                    >
                      <Menu.Item key="/doc/guide/conditional/v-if/conditional-groups-with-v-if-on-template">
                        <router-link to="/doc/guide/conditional/v-if/conditional-groups-with-v-if-on-template">
                          <span>CONDITIONAL GROUP WITH v-if ON TEMPLATE</span>
                        </router-link>
                      </Menu.Item>

                      <Menu.Item key="/doc/guide/conditional/v-if/v-else">
                        <router-link to="/doc/guide/conditional/v-if/v-else">
                          <span>v-else</span>
                        </router-link>
                      </Menu.Item>

                      <Menu.Item key="/doc/guide/conditional/v-if/v-else-if">
                        <router-link to="/doc/guide/conditional/v-if/v-else-if">
                          <span>v-else-if</span>
                        </router-link>
                      </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.Item key="/doc/guide/conditional/v-show">
                      <router-link to="/doc/guide/conditional/v-show">
                        <span>v-show</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/conditional/v-if-with-v-for">
                      <router-link to="/doc/guide/conditional/v-if-with-v-for">
                        <span>v-if WITH v-for</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>

                  <Menu.SubMenu
                    key="/doc/guide/list"
                    v-slots={{
                      title: () => <span>LIST RENDERING</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/list/mapping-an-array-to-elements-with-v-for">
                      <router-link to="/doc/guide/list/mapping-an-array-to-elements-with-v-for">
                        <span>MAPPING AN ARRAY TO ELEMENTS WITH v-for</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/list/v-for-with-an-object">
                      <router-link to="/doc/guide/list/v-for-with-an-object">
                        <span>v-for WITH AN OBJECT</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/list/maintaining-state">
                      <router-link to="/doc/guide/list/maintaining-state">
                        <span>MAINTAINING STATE</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.SubMenu
                      key="/doc/guide/list/array-change-detection"
                      v-slots={{
                        title: () => <span>ARRAY CHANGE DETECTION</span>,
                      }}
                    >
                      <Menu.Item key="/doc/guide/list/array-change-detection/mutation-methods">
                        <router-link to="/doc/guide/list/array-change-detection/mutation-methods">
                          <span>MUTATION METHODS</span>
                        </router-link>
                      </Menu.Item>

                      <Menu.Item key="/doc/guide/list/array-change-detection/replacing-an-array">
                        <router-link to="/doc/guide/list/array-change-detection/replacing-an-array">
                          <span>REPLACING AN ARRAY</span>
                        </router-link>
                      </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.Item key="/doc/guide/list/displaying-filtered-sorted-results">
                      <router-link to="/doc/guide/list/displaying-filtered-sorted-results">
                        <span>DISPLAYING FILTERED/SORTED RESULTS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/list/v-for-with-a-range">
                      <router-link to="/doc/guide/list/v-for-with-a-range">
                        <span>v-for WITH A RANGE</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/list/v-for-on-a-template">
                      <router-link to="/doc/guide/list/v-for-on-a-template">
                        <span>v-for ON A template</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/list/v-for-with-a-component">
                      <router-link to="/doc/guide/list/v-for-with-a-component">
                        <span>v-for WITH A COMPONENT</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>

                  <Menu.SubMenu
                    key="/doc/guide/events"
                    v-slots={{
                      title: () => <span>EVENT HANDLING</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/events/listening-to-events">
                      <router-link to="/doc/guide/events/listening-to-events">
                        <span>LISTENING TO EVENTS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/events/method-event-handlers">
                      <router-link to="/doc/guide/events/method-event-handlers">
                        <span>METHOD EVENT HANDLERS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/events/methods-in-inline-handlers">
                      <router-link to="/doc/guide/events/methods-in-inline-handlers">
                        <span>METHODS IN INLINE HANDLERS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/events/multiple-event-handlers">
                      <router-link to="/doc/guide/events/multiple-event-handlers">
                        <span>MULTIPLE EVENT HANDLERS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/events/event-modifiers">
                      <router-link to="/doc/guide/events/event-modifiers">
                        <span>EVENT MODIFIERS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/events/key-modifiers">
                      <router-link to="/doc/guide/events/key-modifiers">
                        <span>KEY MODIFIERS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/events/system-modifier-keys">
                      <router-link to="/doc/guide/events/system-modifier-keys">
                        <span>SYSTEM MODIFIER KEYS</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>

                  <Menu.SubMenu
                    key="/doc/forms"
                    v-slots={{
                      title: () => <span>FORM INPUT BINDINGS</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/forms/text">
                      <router-link to="/doc/guide/forms/text">
                        <span>TEXT</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/forms/checkbox">
                      <router-link to="/doc/guide/forms/checkbox">
                        <span>CHECKBOX</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/forms/radio">
                      <router-link to="/doc/guide/forms/radio">
                        <span>RADIO</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/forms/select">
                      <router-link to="/doc/guide/forms/select">
                        <span>SELECT</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/forms/modifiers">
                      <router-link to="/doc/guide/forms/modifiers">
                        <span>MODIFIERS</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>

                  <Menu.SubMenu
                    key="/doc/guide/component-basics"
                    v-slots={{
                      title: () => <span>COMPONENTS BASICS</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/component-basics/base-example">
                      <router-link to="/doc/guide/component-basics/base-example">
                        <span>BASE EXAMPLE</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/component-basics/passing-data-to-child-components-with-props">
                      <router-link to="/doc/guide/component-basics/passing-data-to-child-components-with-props">
                        <span>PASSING DATA TO CHILD COMPONENTS WITH PROPS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/component-basics/listening-to-child-components-events">
                      <router-link to="/doc/guide/component-basics/listening-to-child-components-events">
                        <span>LISTENING TO CHILD COMPONENTS EVENTS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/component-basics/content-distribution-with-slots">
                      <router-link to="/doc/guide/component-basics/content-distribution-with-slots">
                        <span>CONTENT DISTRIBUTION WITH SLOTS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/component-basics/dynamic-components">
                      <router-link to="/doc/guide/component-basics/dynamic-components">
                        <span>DYNAMIC COMPONENTS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/component-basics/dom-template-parsing-caveats">
                      <router-link to="/doc/guide/component-basics/dom-template-parsing-caveats">
                        <span>DOM TEMPLATE PARSING CAVEATS</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu.SubMenu>

                <Menu.SubMenu
                  key="/doc/guide/components-in-depth"
                  v-slots={{
                    title: () => <span>COMPONENTS IN-DEPTH</span>,
                  }}
                >
                  <Menu.SubMenu
                    key="/doc/guide/component-registration"
                    v-slots={{
                      title: () => <span>COMPONENT REGISTRATION</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/component-registration/component-registration">
                      <router-link to="/doc/guide/component-registration/component-registration">
                        <span>COMPONENT REGISTRATION</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>

                  <Menu.SubMenu
                    key="/doc/guide/component-props"
                    v-slots={{
                      title: () => <span>PROPS</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/component-props/prop-types">
                      <router-link to="/doc/guide/component-props/prop-types">
                        <span>PROP TYPES</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/component-props/passing-static-or-dynamic-props">
                      <router-link to="/doc/guide/component-props/passing-static-or-dynamic-props">
                        <span>PASSING STATIC OR DYNAMIC PROPS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/component-props/one-way-data-flow">
                      <router-link to="/doc/guide/component-props/one-way-data-flow">
                        <span>ONE-WAY DATA FLOW</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/component-props/prop-validation">
                      <router-link to="/doc/guide/component-props/prop-validation">
                        <span>PROP VALIDATION</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>

                  <Menu.SubMenu
                    key="/doc/guide/component-attrs"
                    v-slots={{
                      title: () => <span>NON-PROP ATTRIBUTES</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/component-attrs/non-prop-attributes">
                      <router-link to="/doc/guide/component-attrs/non-prop-attributes">
                        <span>NON-PROP ATTRIBUTES</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/component-attrs/attribute-inheritance">
                      <router-link to="/doc/guide/component-attrs/attribute-inheritance">
                        <span>ATTRIBUTE INHERITANCE</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/component-attrs/disabling-attribute-inheritance">
                      <router-link to="/doc/guide/component-attrs/disabling-attribute-inheritance">
                        <span>DISABLING ATTRIBUTE INHERITANCE</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>

                  <Menu.SubMenu
                    key="/doc/guide/component-custom-events"
                    v-slots={{
                      title: () => <span>CUSTOM EVENTS</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/component-custom-events/event-names">
                      <router-link to="/doc/guide/component-custom-events/event-names">
                        <span>EVENT NAMES</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/component-custom-events/defining-custom-events">
                      <router-link to="/doc/guide/component-custom-events/defining-custom-events">
                        <span>DEFINING CUSTOM EVENTS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/component-custom-events/v-model-arguments">
                      <router-link to="/doc/guide/component-custom-events/v-model-arguments">
                        <span>v-model ARGUMENTS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/component-custom-events/multiple-v-model-bindings">
                      <router-link to="/doc/guide/component-custom-events/multiple-v-model-bindings">
                        <span>MULTIPLE v-model BINDINGS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/component-custom-events/handling-v-model-modifiers">
                      <router-link to="/doc/guide/component-custom-events/handling-v-model-modifiers">
                        <span>HANDLING v-model MODIFIERS</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>

                  <Menu.SubMenu
                    key="/doc/guide/component-slots"
                    v-slots={{
                      title: () => <span>SLOTS</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/component-slots/slot-content">
                      <router-link to="/doc/guide/component-slots/slot-content">
                        <span>SLOT CONTENT</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/component-slots/render-scope">
                      <router-link to="/doc/guide/component-slots/render-scope">
                        <span>RENDER SCOPE</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/component-slots/fallback-content">
                      <router-link to="/doc/guide/component-slots/fallback-content">
                        <span>FALLBACK CONTENT</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/component-slots/named-slots">
                      <router-link to="/doc/guide/component-slots/named-slots">
                        <span>NAMED SLOTS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/component-slots/scoped-slots">
                      <router-link to="/doc/guide/component-slots/scoped-slots">
                        <span>SCOPED SLOTS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/component-slots/named-slots-shorthand">
                      <router-link to="/doc/guide/component-slots/named-slots-shorthand">
                        <span>NAMED SLOTS SHORTHAND</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>

                  <Menu.SubMenu
                    key="/doc/guide/component-provide-inject"
                    v-slots={{
                      title: () => <span>PROVIDE / INJECT</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/component-provide-inject/provide-inject">
                      <router-link to="/doc/guide/component-provide-inject/provide-inject">
                        <span>PROVIDE / INJECT</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>

                  <Menu.SubMenu
                    key="/doc/guide/component-dynamic-async"
                    v-slots={{
                      title: () => <span>DYNAMIC & ASYNC COMPONENTS</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/component-dynamic-async/dynamic-components-with-keep-alive">
                      <router-link to="/doc/guide/component-dynamic-async/dynamic-components-with-keep-alive">
                        <span>DYNAMIC COMPONENTS WITH keep-alive</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/component-dynamic-async/async-components">
                      <router-link to="/doc/guide/component-dynamic-async/async-components">
                        <span>ASYNC COMPONENTS</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>

                  <Menu.SubMenu
                    key="/doc/guide/component-template-refs"
                    v-slots={{
                      title: () => <span>TEMPLATE REFS</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/component-template-refs/template-refs">
                      <router-link to="/doc/guide/component-template-refs/template-refs">
                        <span>TEMPLATE REFS</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu.SubMenu>

                <Menu.SubMenu
                  key="/doc/guide/reusability-composition"
                  v-slots={{
                    title: () => <span>REUSABILITY & COMPOSITION</span>,
                  }}
                >
                  <Menu.SubMenu
                    key="/doc/guide/custom-directive"
                    v-slots={{
                      title: () => <span>CUSTOM DIRECTIVES</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/custom-directive/intro">
                      <router-link to="/doc/guide/custom-directive/intro">
                        <span>INTRO</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/custom-directive/hook-functions">
                      <router-link to="/doc/guide/custom-directive/hook-functions">
                        <span>HOOK FUNCTIONS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/custom-directive/dynamic-directive-arguments">
                      <router-link to="/doc/guide/custom-directive/dynamic-directive-arguments">
                        <span>DYNAMIC DIRECTIVE ARGUMENTS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/custom-directive/usage-on-components">
                      <router-link to="/doc/guide/custom-directive/usage-on-components">
                        <span>USAGE ON COMPONENTS</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>

                  <Menu.SubMenu
                    key="/doc/guide/teleport"
                    v-slots={{
                      title: () => <span>TELEPORT</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/teleport/teleport">
                      <router-link to="/doc/guide/teleport/teleport">
                        <span>TELEPORT</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>

                  <Menu.SubMenu
                    key="/doc/guide/render-function"
                    v-slots={{
                      title: () => <span>RENDER FUNCTIONS</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/render-function/render-functions">
                      <router-link to="/doc/guide/render-function/render-functions">
                        <span>RENDER FUNCTIONS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/render-function/constraints">
                      <router-link to="/doc/guide/render-function/constraints">
                        <span>CONSTRAINTS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/render-function/replacing-template-features-with-plain-javascript">
                      <router-link to="/doc/guide/render-function/replacing-template-features-with-plain-javascript">
                        <span>REPLACING TEMPLATE FEATURES WITH PLAIN JAVASCRIPT</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/render-function/jsx">
                      <router-link to="/doc/guide/render-function/jsx">
                        <span>JSX</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>

                  <Menu.SubMenu
                    key="/doc/guide/plugins"
                    v-slots={{
                      title: () => <span>PLUGINS</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/plugins/plugins">
                      <router-link to="/doc/guide/plugins/plugins">
                        <span>PLUGINS</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu.SubMenu>

                <Menu.SubMenu
                  key="/doc/guide/reactivity"
                  v-slots={{
                    title: () => <span>REACTIVITY</span>,
                  }}
                >
                  <Menu.SubMenu
                    key="/doc/guide/reactivity-fundamentals"
                    v-slots={{
                      title: () => <span>REACTIVITY FUNDAMENTALS</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/reactivity-fundamentals/declaring-reactive-state">
                      <router-link to="/doc/guide/reactivity-fundamentals/declaring-reactive-state">
                        <span>DECLARING REACTIVE STATE</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/reactivity-fundamentals/creating-standalone-reactive-values-as-refs">
                      <router-link to="/doc/guide/reactivity-fundamentals/creating-standalone-reactive-values-as-refs">
                        <span>CREATING STANDALONE REACTIVE VALUES AS REFS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/reactivity-fundamentals/ref-unwrapping">
                      <router-link to="/doc/guide/reactivity-fundamentals/ref-unwrapping">
                        <span>REF UNWRAPPING</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/reactivity-fundamentals/access-in-reactive-objects">
                      <router-link to="/doc/guide/reactivity-fundamentals/access-in-reactive-objects">
                        <span>ACCESS IN REACTIVE OBJECTS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/reactivity-fundamentals/destructuring-reactive-state">
                      <router-link to="/doc/guide/reactivity-fundamentals/destructuring-reactive-state">
                        <span>DESTRUCTURING REACTIVE STATE</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/reactivity-fundamentals/prevent-mutating-reactive-objects-with-readonly">
                      <router-link to="/doc/guide/reactivity-fundamentals/prevent-mutating-reactive-objects-with-readonly">
                        <span>PREVENT MUTATING REACTIVE OBJECTS WITH readonly</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>

                  <Menu.SubMenu
                    key="/doc/guide/reactivity-computed-watchers"
                    v-slots={{
                      title: () => <span>COMPUTED AND WATCH</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/reactivity-computed-watchers/computed-values">
                      <router-link to="/doc/guide/reactivity-computed-watchers/computed-values">
                        <span>COMPUTED VALUES</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/reactivity-computed-watchers/watch-effect">
                      <router-link to="/doc/guide/reactivity-computed-watchers/watch-effect">
                        <span>watchEffect</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/reactivity-computed-watchers/watch">
                      <router-link to="/doc/guide/reactivity-computed-watchers/watch">
                        <span>watch</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu.SubMenu>
                <Menu.SubMenu
                  key="/doc/guide/composition-api"
                  v-slots={{
                    title: () => <span>COMPOSITION API</span>,
                  }}
                >
                  <Menu.SubMenu
                    key="/doc/guide/composition-api-setup"
                    v-slots={{
                      title: () => <span>SETUP</span>,
                    }}
                  >
                    <Menu.Item key="/doc/guide/composition-api-setup/arguments">
                      <router-link to="/doc/guide/composition-api-setup/arguments">
                        <span>ARGUMENTS</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/composition-api-setup/usage-with-templates">
                      <router-link to="/doc/guide/composition-api-setup/usage-with-templates">
                        <span>USAGE WITH TEMPLATES</span>
                      </router-link>
                    </Menu.Item>

                    <Menu.Item key="/doc/guide/composition-api-setup/usage-with-render-functions">
                      <router-link to="/doc/guide/composition-api-setup/usage-with-render-functions">
                        <span>USAGE WITH RENDER FUNCTIONS</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu.SubMenu>
              </Menu.SubMenu>
            </Menu>
          </Layout.Sider>

          <Layout style={{ height: '100%' }}>
            <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 24px' }}>
              <div style={{ color: '#ffffff', fontSize: '20px' }}>@luotao/learning-vue</div>
            </Layout.Header>

            <Layout.Content
              style={{
                margin: '50px 0 0 0',
                padding: '12px',
                background: '#ffffff',
                height: '100%',
                overflowY: 'scroll',
                overflowX: 'auto',
              }}
            >
              <router-view />
            </Layout.Content>
          </Layout>
        </Layout>
      </>
    );
  },
};
