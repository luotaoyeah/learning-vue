import Vue from "vue";
import _ from "lodash";
import "./App.scss";
import { ROUTES } from "../router/RouterConst";
import { Aside, Container, Main, Menu, MenuItem, Submenu } from "element-ui";
import { Component } from "vue-property-decorator";

/**
 * 主页
 */
@Component<App>({})
export class App extends Vue {
  get defaultActive() {
    const vm = this;
    return (
      _.find(ROUTES, i => i.NAME === vm.$route.name) || {
        NAME: ""
      }
    ).NAME;
  }

  public render() {
    const vm = this;

    return (
      <div id="app">
        <Container style={{ height: "100%" }}>
          <Aside width="400px" style={{ borderRight: "1px solid #eeeeee" }}>
            <Menu
              collapseTransition={false}
              uniqueOpened={true}
              defaultActive={vm.defaultActive}
              style={{ border: "none" }}
            >
              <Submenu index="1">
                <template slot="title">GUIDE</template>
                <Submenu index="1-1">
                  <template slot="title">Introduction</template>
                  <MenuItem
                    index={ROUTES.GUIDE_INTRODUCTION_DECLARATIVE_RENDERING.NAME}
                  >
                    <router-link
                      to={{
                        name:
                          ROUTES.GUIDE_INTRODUCTION_DECLARATIVE_RENDERING.NAME
                      }}
                    >
                      Declarative Rendering
                    </router-link>
                  </MenuItem>
                  <MenuItem
                    index={ROUTES.GUIDE_INTRODUCTION_CONDITIONAL_AND_LOOP.NAME}
                  >
                    <router-link
                      to={{
                        name:
                          ROUTES.GUIDE_INTRODUCTION_CONDITIONAL_AND_LOOP.NAME
                      }}
                    >
                      Conditionals And Loops
                    </router-link>
                  </MenuItem>
                  <MenuItem index="1-1-3">
                    <router-link to={{ name: "HandingUserInput" }}>
                      Handing User Input
                    </router-link>
                  </MenuItem>
                  <MenuItem index="1-1-4">
                    <router-link to={{ name: "ComposingWithComponents" }}>
                      Composing With Components
                    </router-link>
                  </MenuItem>
                </Submenu>
                <Submenu index="1-2">
                  <template slot="title">The Vue Instance</template>
                  <MenuItem index="1-2-1">
                    <router-link to={{ name: "DataAndMethods" }}>
                      Data And Methods
                    </router-link>
                  </MenuItem>
                </Submenu>
                <Submenu index="1-3">
                  <template slot="title">Template Syntax</template>
                  <MenuItem index="1-3-1">
                    <router-link to={{ name: "template-syntax-interpolation" }}>
                      Interpolation
                    </router-link>
                  </MenuItem>
                  <MenuItem index="1-3-2">
                    <router-link to={{ name: "template-syntax-directive" }}>
                      Directive
                    </router-link>
                  </MenuItem>
                </Submenu>
                <Submenu index="1-4">
                  <template slot="title">
                    Computed Properties and Watchers
                  </template>
                  <MenuItem index="1-4-1">
                    <router-link to={{ name: "guide-computed-properties" }}>
                      Computed Properties
                    </router-link>
                  </MenuItem>
                  <MenuItem index="1-4-2">
                    <router-link to={{ name: "guide-watchers" }}>
                      Watchers
                    </router-link>
                  </MenuItem>
                </Submenu>
                <Submenu index="1-5">
                  <template slot="title">Classes and Styles</template>
                  <MenuItem index="1-5-1">
                    <router-link to={{ name: "guide-class" }}>
                      Classes
                    </router-link>
                  </MenuItem>
                  <MenuItem index="1-5-2">
                    <router-link to={{ name: "guide-style" }}>
                      Styles
                    </router-link>
                  </MenuItem>
                </Submenu>
                <Submenu index="1-6">
                  <template slot="title">Conditional Rendering</template>
                  <MenuItem index="1-6-1">
                    <router-link
                      to={{ name: "guide-conditional-rendering-v-if" }}
                    >
                      v-if
                    </router-link>
                  </MenuItem>
                  <MenuItem index="1-6-2">
                    <router-link
                      to={{ name: "guide-conditional-rendering-v-show" }}
                    >
                      v-show
                    </router-link>
                  </MenuItem>
                </Submenu>
                <MenuItem index="1-7">
                  <router-link to={{ name: "guide-list-rendering" }}>
                    List Rendering
                  </router-link>
                </MenuItem>
                <MenuItem index="1-8">
                  <router-link to={{ name: "guide-event-handling" }}>
                    Event Handling
                  </router-link>
                </MenuItem>
                <Submenu index="1-9">
                  <template slot="title">Form Input Binding</template>
                  <MenuItem index="1-9-1">
                    <router-link to={{ name: "guide-form-input-basic" }}>
                      Basic
                    </router-link>
                  </MenuItem>
                  <MenuItem index="1-9-2">
                    <router-link
                      to={{ name: "guide-form-input-value-binding" }}
                    >
                      Value Binding
                    </router-link>
                  </MenuItem>
                  <MenuItem index="1-9-3">
                    <router-link to={{ name: "guide-form-input-modifier" }}>
                      Modifiers
                    </router-link>
                  </MenuItem>
                </Submenu>
                <MenuItem index="1-10">
                  <router-link to={{ name: "guide-component-basic" }}>
                    Component Basic
                  </router-link>
                </MenuItem>
                <MenuItem index="1-11">
                  <router-link to={{ name: "guide-component-registration" }}>
                    Component Registration
                  </router-link>
                </MenuItem>
                <MenuItem index="1-12">
                  <router-link to={{ name: "guide-props" }}>Props</router-link>
                </MenuItem>
                <MenuItem index="1-13">
                  <router-link to={{ name: "guide-custom-events" }}>
                    Custom Events
                  </router-link>
                </MenuItem>
                <Submenu index="1-14">
                  <template slot="title">Slots</template>
                  <MenuItem index={ROUTES.GUIDE_SLOTS_SLOT_CONTENT.NAME}>
                    <router-link
                      to={{ name: ROUTES.GUIDE_SLOTS_SLOT_CONTENT.NAME }}
                    >
                      Slot Content
                    </router-link>
                  </MenuItem>
                  <MenuItem index={ROUTES.GUIDE_SLOTS_NAMED_SLOT.NAME}>
                    <router-link
                      to={{ name: ROUTES.GUIDE_SLOTS_NAMED_SLOT.NAME }}
                    >
                      Named Slot
                    </router-link>
                  </MenuItem>
                  <MenuItem
                    index={ROUTES.GUIDE_SLOTS_DEFAULT_SLOT_CONTENT.NAME}
                  >
                    <router-link
                      to={{
                        name: ROUTES.GUIDE_SLOTS_DEFAULT_SLOT_CONTENT.NAME
                      }}
                    >
                      Default Slot Content
                    </router-link>
                  </MenuItem>
                  <MenuItem index={ROUTES.GUIDE_SLOTS_COMPILATION_SCOPE.NAME}>
                    <router-link
                      to={{ name: ROUTES.GUIDE_SLOTS_COMPILATION_SCOPE.NAME }}
                    >
                      Compilation Scope
                    </router-link>
                  </MenuItem>
                  <MenuItem index={ROUTES.GUIDE_SLOTS_SCOPED_SLOT.NAME}>
                    <router-link
                      to={{ name: ROUTES.GUIDE_SLOTS_SCOPED_SLOT.NAME }}
                    >
                      Scoped Slot
                    </router-link>
                  </MenuItem>
                </Submenu>
                <MenuItem index="1-15">
                  <router-link to={{ name: "guide-dynamic-async-component" }}>
                    Dynamic & Async Components
                  </router-link>
                </MenuItem>
                <MenuItem index="1-16">
                  <router-link to={{ name: "guide-handling-edge-cases" }}>
                    Handling Edge Cases
                  </router-link>
                </MenuItem>
                <MenuItem index="1-17">
                  <router-link to={{ name: "guide-transition-and-animation" }}>
                    Transitions and Animations
                  </router-link>
                </MenuItem>
                <MenuItem index="1-18">
                  <router-link to={{ name: "guide-state-transition" }}>
                    State Transitions
                  </router-link>
                </MenuItem>
                <MenuItem index="1-19">
                  <router-link to={{ name: "guide-mixins" }}>
                    Mixins
                  </router-link>
                </MenuItem>
                <MenuItem index="1-20">
                  <router-link to={{ name: "guide-custom-directives" }}>
                    Custom Directives
                  </router-link>
                </MenuItem>
                <MenuItem index="1-21">
                  <router-link to={{ name: "guide-render-function-and-jsx" }}>
                    Render Functions & JSX
                  </router-link>
                </MenuItem>
                <MenuItem index="1-22">
                  <router-link to={{ name: "guide-plugins" }}>
                    Plugins
                  </router-link>
                </MenuItem>
                <MenuItem index="1-23">
                  <router-link to={{ name: "guide-filters" }}>
                    Filters
                  </router-link>
                </MenuItem>
                <MenuItem index="1-23">
                  <router-link to={{ name: "guide-reactivity-in-depth" }}>
                    Reactivity in Depth
                  </router-link>
                </MenuItem>
              </Submenu>
              <Submenu index="2">
                <template slot="title">STYLE GUIDE</template>
                <MenuItem index="2-1">
                  <router-link to={{ name: "style-guide-essential" }}>
                    Essential
                  </router-link>
                </MenuItem>
                <MenuItem index="2-2">
                  <router-link to={{ name: "style-guide-strongly-recommend" }}>
                    Strongly Recommended
                  </router-link>
                </MenuItem>
                <MenuItem index="2-3">
                  <router-link to={{ name: "style-guide-recommend" }}>
                    Recommended
                  </router-link>
                </MenuItem>
                <MenuItem index="2-4">
                  <router-link to={{ name: "style-guide-use-with-caution" }}>
                    Use with Caution
                  </router-link>
                </MenuItem>
              </Submenu>
              <Submenu index="3">
                <template slot="title">API</template>
                <MenuItem index="3-1">
                  <router-link to={{ name: "api-global-config" }}>
                    Global Config
                  </router-link>
                </MenuItem>
                <MenuItem index="3-2">
                  <router-link to={{ name: "api-global-api" }}>
                    Global API
                  </router-link>
                </MenuItem>
                <Submenu index="3-3">
                  <template slot="title">Options</template>
                  <MenuItem index={ROUTES.API_OPTIONS_DATA.NAME}>
                    <router-link to={{ name: ROUTES.API_OPTIONS_DATA.NAME }}>
                      Data
                    </router-link>
                  </MenuItem>
                  <MenuItem index="3-3-2">
                    <router-link to={{ name: "api-options-dom" }}>
                      DOM
                    </router-link>
                  </MenuItem>
                  <MenuItem index="3-3-3">
                    <router-link to={{ name: "api-options-lifecycle-hooks" }}>
                      Lifecycle Hooks
                    </router-link>
                  </MenuItem>
                  <MenuItem index="3-3-4">
                    <router-link to={{ name: "api-options-assets" }}>
                      Assets
                    </router-link>
                  </MenuItem>
                  <MenuItem index={ROUTES.API_OPTIONS_COMPOSITION.NAME}>
                    <router-link
                      to={{ name: ROUTES.API_OPTIONS_COMPOSITION.NAME }}
                    >
                      Composition
                    </router-link>
                  </MenuItem>
                  <MenuItem index={ROUTES.API_OPTIONS_MISC.NAME}>
                    <router-link to={{ name: ROUTES.API_OPTIONS_MISC.NAME }}>
                      Misc
                    </router-link>
                  </MenuItem>
                </Submenu>
                <MenuItem index={ROUTES.API_INSTANCE_PROPERTIES.NAME}>
                  <router-link
                    to={{ name: ROUTES.API_INSTANCE_PROPERTIES.NAME }}
                  >
                    Instance Properties
                  </router-link>
                </MenuItem>
                <Submenu index="3-5">
                  <template slot="title">Instance Methods</template>
                  <MenuItem index={ROUTES.API_INSTANCE_METHODS_DATA.NAME}>
                    <router-link
                      to={{ name: ROUTES.API_INSTANCE_METHODS_DATA.NAME }}
                    >
                      Data
                    </router-link>
                  </MenuItem>
                  <MenuItem index={ROUTES.API_INSTANCE_METHODS_EVENTS.NAME}>
                    <router-link
                      to={{ name: ROUTES.API_INSTANCE_METHODS_EVENTS.NAME }}
                    >
                      Events
                    </router-link>
                  </MenuItem>
                  <MenuItem index={ROUTES.API_INSTANCE_METHODS_LIFECYCLE.NAME}>
                    <router-link
                      to={{ name: ROUTES.API_INSTANCE_METHODS_LIFECYCLE.NAME }}
                    >
                      Lifecycle
                    </router-link>
                  </MenuItem>
                </Submenu>
                <MenuItem index="3-6">
                  <router-link to={{ name: "api-directives" }}>
                    Directives
                  </router-link>
                </MenuItem>
                <MenuItem index={ROUTES.API_SPECIAL_ATTRIBUTES.NAME}>
                  <router-link
                    to={{ name: ROUTES.API_SPECIAL_ATTRIBUTES.NAME }}
                  >
                    Special Attributes
                  </router-link>
                </MenuItem>
                <MenuItem index={ROUTES.API_BUILTIN_COMPONENTS.NAME}>
                  <router-link
                    to={{ name: ROUTES.API_BUILTIN_COMPONENTS.NAME }}
                  >
                    Built-in Components
                  </router-link>
                </MenuItem>
              </Submenu>
              <Submenu index="4">
                <template slot="title">WHAT'S NEW</template>
                <Submenu index="3-3">
                  <template slot="title">vue@2.6</template>
                  <MenuItem index={ROUTES.WHATS_NEW_2_6_OBSERVABLE.NAME}>
                    <router-link
                      to={{ name: ROUTES.WHATS_NEW_2_6_OBSERVABLE.NAME }}
                    >
                      Vue.observable()
                    </router-link>
                  </MenuItem>
                  <MenuItem
                    index={ROUTES.WHATS_NEW_2_6_BIND_PROP_SHORTCUT.NAME}
                  >
                    <router-link
                      to={{
                        name: ROUTES.WHATS_NEW_2_6_BIND_PROP_SHORTCUT.NAME
                      }}
                    >
                      A short syntax for v-bind .prop modifier
                    </router-link>
                  </MenuItem>
                  <MenuItem index={ROUTES.WHATS_NEW_2_6_CUSTOM_TOSTRING.NAME}>
                    <router-link
                      to={{
                        name: ROUTES.WHATS_NEW_2_6_CUSTOM_TOSTRING.NAME
                      }}
                    >
                      Use custom toString() when interpolating objects
                    </router-link>
                  </MenuItem>
                  <MenuItem
                    index={ROUTES.WHATS_NEW_2_6_ASYNC_ERROR_HANDLING.NAME}
                  >
                    <router-link
                      to={{
                        name: ROUTES.WHATS_NEW_2_6_ASYNC_ERROR_HANDLING.NAME
                      }}
                    >
                      async error handling
                    </router-link>
                  </MenuItem>
                  <MenuItem
                    index={ROUTES.WHATS_NEW_2_6_V_FOR_SUPPORT_ITERABLE.NAME}
                  >
                    <router-link
                      to={{
                        name: ROUTES.WHATS_NEW_2_6_V_FOR_SUPPORT_ITERABLE.NAME
                      }}
                    >
                      v-for support iterable
                    </router-link>
                  </MenuItem>
                </Submenu>
              </Submenu>
            </Menu>
          </Aside>
          <Container>
            <Main>
              <small>
                <router-view />
              </small>
            </Main>
          </Container>
        </Container>
      </div>
    );
  }
}
