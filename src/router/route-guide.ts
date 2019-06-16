import { ROUTES } from "./router-const";
import { RouteConfig } from "vue-router";

/**
 * guide
 */
export const ROUTE_GUIDE: Array<RouteConfig> = [
  {
    path: ROUTES.GUIDE_INTRODUCTION_DECLARATIVE_RENDERING.PATH,
    name: ROUTES.GUIDE_INTRODUCTION_DECLARATIVE_RENDERING.NAME,
    component: () =>
      import("../app/doc/guide/01-introduction/declarative-rendering.vue")
  },
  {
    path: ROUTES.GUIDE_INTRODUCTION_CONDITIONAL_AND_LOOP.PATH,
    name: ROUTES.GUIDE_INTRODUCTION_CONDITIONAL_AND_LOOP.NAME,
    component: () =>
      import("../app/doc/guide/01-introduction/conditional-and-loop.vue")
  },
  {
    path: "/guide/handing-user-input",
    name: "HandingUserInput",
    component: () =>
      import("../app/doc/guide/01-introduction/handing-user-input.vue")
  },
  {
    path: "/guide/composing-with-components",
    name: "ComposingWithComponents",
    component: () =>
      import("../app/doc/guide/01-introduction/composing-with-components.vue")
  },
  {
    path: "/guide/data-and-methods",
    name: "DataAndMethods",
    component: () =>
      import("../app/doc/guide/02-the-vue-instance/data-and-methods.vue")
  },
  {
    path: "/guide/template-syntax/interpolation",
    name: "template-syntax-interpolation",
    component: () =>
      import("../app/doc/guide/03-template-syntax/interpolation/index.vue")
  },
  {
    path: "/guide/template-syntax/directive",
    name: "template-syntax-directive",
    component: () =>
      import("../app/doc/guide/03-template-syntax/directive/index.vue")
  },
  {
    path: "/guide/computed-properties",
    name: "guide-computed-properties",
    component: () =>
      import(
        "../app/doc/guide/04-computed-properties-and-watchers/computed-properties/index.vue"
      )
  },
  {
    path: "/guide/watchers",
    name: "guide-watchers",
    component: () =>
      import(
        "../app/doc/guide/04-computed-properties-and-watchers/watchers/index.vue"
      )
  },
  {
    path: "/guide/class",
    name: "guide-class",
    component: () =>
      import("../app/doc/guide/05-class-and-style/class/index.vue")
  },
  {
    path: "/guide/style",
    name: "guide-style",
    component: () =>
      import("../app/doc/guide/05-class-and-style/style/index.vue")
  },
  {
    path: "/guide/conditional-rendering-v-if",
    name: "guide-conditional-rendering-v-if",
    component: () =>
      import("../app/doc/guide/06-conditional-rendering/v-if/index.vue")
  },
  {
    path: "/guide/conditional-rendering-v-show",
    name: "guide-conditional-rendering-v-show",
    component: () =>
      import("../app/doc/guide/06-conditional-rendering/v-show/index.vue")
  },
  {
    path: "/guide/list-rendering",
    name: "guide-list-rendering",
    component: () =>
      import("../app/doc/guide/07-list-rendering/v-for/index.vue")
  },
  {
    path: "/guide/event-handling",
    name: "guide-event-handling",
    component: () => import("../app/doc/guide/08-event-handling/index.vue")
  },
  {
    path: "/guide/form-input/basic",
    name: "guide-form-input-basic",
    component: () =>
      import("../app/doc/guide/09-form-input-binding/01-basic/index.vue")
  },
  {
    path: "/guide/form-input/value-binding",
    name: "guide-form-input-value-binding",
    component: () =>
      import(
        "../app/doc/guide/09-form-input-binding/02-value-binding/index.vue"
      )
  },
  {
    path: "/guide/form-input/modifier",
    name: "guide-form-input-modifier",
    component: () =>
      import("../app/doc/guide/09-form-input-binding/03-modifiers/index.vue")
  },
  {
    path: "/guide/component-basic",
    name: "guide-component-basic",
    component: () => import("../app/doc/guide/10-component-basic/index.vue")
  },
  {
    path: "/guide/component-registration",
    name: "guide-component-registration",
    component: () =>
      import("../app/doc/guide/11-component-registration/index.vue")
  },
  {
    path: "/guide/props",
    name: "guide-props",
    component: () => import("../app/doc/guide/12-props/index.vue")
  },
  {
    path: "/guide/custom-events",
    name: "guide-custom-events",
    component: () => import("../app/doc/guide/13-custom-events/index.vue")
  },
  {
    name: ROUTES.GUIDE_SLOTS_SLOT_CONTENT.NAME,
    path: ROUTES.GUIDE_SLOTS_SLOT_CONTENT.PATH,
    component: () => import("../app/doc/guide/14-slots/01-slot-content/C0101")
  },
  {
    name: ROUTES.GUIDE_SLOTS_NAMED_SLOT.NAME,
    path: ROUTES.GUIDE_SLOTS_NAMED_SLOT.PATH,
    component: () => import("../app/doc/guide/14-slots/02-named-slots/C0201")
  },
  {
    name: ROUTES.GUIDE_SLOTS_DEFAULT_SLOT_CONTENT.NAME,
    path: ROUTES.GUIDE_SLOTS_DEFAULT_SLOT_CONTENT.PATH,
    component: () =>
      import("../app/doc/guide/14-slots/03-default-slot-content/C0301")
  },
  {
    name: ROUTES.GUIDE_SLOTS_COMPILATION_SCOPE.NAME,
    path: ROUTES.GUIDE_SLOTS_COMPILATION_SCOPE.PATH,
    component: () =>
      import("../app/doc/guide/14-slots/04-compilation-scope/C0401")
  },
  {
    name: ROUTES.GUIDE_SLOTS_SCOPED_SLOT.NAME,
    path: ROUTES.GUIDE_SLOTS_SCOPED_SLOT.PATH,
    component: () => import("../app/doc/guide/14-slots/05-scoped-slot/C05")
  },
  {
    path: "/guide/dynamic-async-component",
    name: "01-15",
    component: () =>
      import("../app/doc/guide/15-dynamic-async-component/index.vue")
  },
  {
    path: "/guide/handling-edge-cases",
    name: "01-16",
    component: () => import("../app/doc/guide/16-handling-edge-cases/index.vue")
  },
  {
    path: "/guide/transition-and-animation",
    name: "01-17",
    component: () =>
      import("../app/doc/guide/17-enter-leave-list-transitions/index.vue")
  },
  {
    path: "/guide/state-transition",
    name: "01-18",
    component: () => import("../app/doc/guide/18-state-transitions/index.vue")
  },
  {
    path: "/guide/mixins",
    name: "01-19",
    component: () => import("../app/doc/guide/19-mixins/index.vue")
  },
  {
    path: "/guide/custom-directives",
    name: "01-20",
    component: () => import("../app/doc/guide/20-custom-directives/index.vue")
  },
  {
    name: ROUTES.GUIDE_RENDER_FUNCTIONS_BASIC.NAME,
    path: ROUTES.GUIDE_RENDER_FUNCTIONS_BASIC.PATH,
    component: () =>
      import(
        "../app/doc/guide/21-render-functions-and-jsx/21-01-basics/01-basics.vue"
      )
  },
  {
    name: ROUTES.GUIDE_RENDER_FUNCTIONS_VDOM.NAME,
    path: ROUTES.GUIDE_RENDER_FUNCTIONS_VDOM.PATH,
    component: () =>
      import(
        "../app/doc/guide/21-render-functions-and-jsx/21-02-nodes-trees-and-the-virtual-dom/02-nodes-trees-and-virtual-dom.vue"
      )
  },
  {
    name: ROUTES.GUIDE_RENDER_FUNCTIONS_CREATE_ELEMENT.NAME,
    path: ROUTES.GUIDE_RENDER_FUNCTIONS_CREATE_ELEMENT.PATH,
    component: () =>
      import(
        "../app/doc/guide/21-render-functions-and-jsx/21-03-createelement-arguments/03-createelement-arguments.vue"
      )
  },
  {
    name: ROUTES.GUIDE_RENDER_FUNCTIONS_TEMPLATE.NAME,
    path: ROUTES.GUIDE_RENDER_FUNCTIONS_TEMPLATE.PATH,
    component: () =>
      import(
        "../app/doc/guide/21-render-functions-and-jsx/21-04-replacing-template-features-with-plain-javascript/04-00-replacing-template-features-with-plain-js.vue"
      )
  },
  {
    name: ROUTES.GUIDE_RENDER_FUNCTIONS_JSX.NAME,
    path: ROUTES.GUIDE_RENDER_FUNCTIONS_JSX.PATH,
    component: () =>
      import("../app/doc/guide/21-render-functions-and-jsx/21-05-jsx/C2105")
  },
  {
    name: ROUTES.GUIDE_RENDER_FUNCTIONS_FUNCTIONAL_COMPONENT.NAME,
    path: ROUTES.GUIDE_RENDER_FUNCTIONS_FUNCTIONAL_COMPONENT.PATH,
    component: () =>
      import(
        "../app/doc/guide/21-render-functions-and-jsx/21-06-functional-components/C2106"
      )
  },
  {
    name: ROUTES.GUIDE_RENDER_FUNCTIONS_TEMPLATE_COMPILATION.NAME,
    path: ROUTES.GUIDE_RENDER_FUNCTIONS_TEMPLATE_COMPILATION.PATH,
    component: () =>
      import(
        "../app/doc/guide/21-render-functions-and-jsx/21-07-template-compilation/07-template-compilation.vue"
      )
  },
  {
    path: "/guide/plugins",
    name: "01-22",
    component: () => import("../app/doc/guide/22-plugins/index.vue")
  },
  {
    path: "/guide/filters",
    name: "01-23",
    component: () => import("../app/doc/guide/23-filters/index.vue")
  }
];
