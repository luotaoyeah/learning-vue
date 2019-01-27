import { ROUTES } from "./RouterConst";
import { RouteConfig } from "vue-router";

/**
 * guide
 */
export const ROUTE_GUIDE: Array<RouteConfig> = [
  {
    path: ROUTES.GUIDE_INTRODUCTION_DECLARATIVE_RENDERING.PATH,
    name: ROUTES.GUIDE_INTRODUCTION_DECLARATIVE_RENDERING.NAME,
    component: () =>
      import("../doc/guide/01-introduction/declarative-rendering.vue")
  },
  {
    path: ROUTES.GUIDE_INTRODUCTION_CONDITIONAL_AND_LOOP.PATH,
    name: ROUTES.GUIDE_INTRODUCTION_CONDITIONAL_AND_LOOP.NAME,
    component: () =>
      import("../doc/guide/01-introduction/conditional-and-loop.vue")
  },
  {
    path: "/guide/handing-user-input",
    name: "HandingUserInput",
    component: () =>
      import("../doc/guide/01-introduction/handing-user-input.vue")
  },
  {
    path: "/guide/composing-with-components",
    name: "ComposingWithComponents",
    component: () =>
      import("../doc/guide/01-introduction/composing-with-components.vue")
  },
  {
    path: "/guide/data-and-methods",
    name: "DataAndMethods",
    component: () =>
      import("../doc/guide/02-the-vue-instance/data-and-methods.vue")
  },
  {
    path: "/guide/template-syntax/interpolation",
    name: "template-syntax-interpolation",
    component: () =>
      import("../doc/guide/03-template-syntax/interpolation/index.vue")
  },
  {
    path: "/guide/template-syntax/directive",
    name: "template-syntax-directive",
    component: () =>
      import("../doc/guide/03-template-syntax/directive/index.vue")
  },
  {
    path: "/guide/computed-properties",
    name: "guide-computed-properties",
    component: () =>
      import("../doc/guide/04-computed-properties-and-watchers/computed-properties/index.vue")
  },
  {
    path: "/guide/watchers",
    name: "guide-watchers",
    component: () =>
      import("../doc/guide/04-computed-properties-and-watchers/watchers/index.vue")
  },
  {
    path: "/guide/class",
    name: "guide-class",
    component: () => import("../doc/guide/05-class-and-style/class/index.vue")
  },
  {
    path: "/guide/style",
    name: "guide-style",
    component: () => import("../doc/guide/05-class-and-style/style/index.vue")
  },
  {
    path: "/guide/conditional-rendering-v-if",
    name: "guide-conditional-rendering-v-if",
    component: () =>
      import("../doc/guide/06-conditional-rendering/v-if/index.vue")
  },
  {
    path: "/guide/conditional-rendering-v-show",
    name: "guide-conditional-rendering-v-show",
    component: () =>
      import("../doc/guide/06-conditional-rendering/v-show/index.vue")
  },
  {
    path: "/guide/list-rendering",
    name: "guide-list-rendering",
    component: () => import("../doc/guide/07-list-rendering/v-for/index.vue")
  },
  {
    path: "/guide/event-handling",
    name: "guide-event-handling",
    component: () => import("../doc/guide/08-event-handling/index.vue")
  },
  {
    path: "/guide/form-input/basic",
    name: "guide-form-input-basic",
    component: () =>
      import("../doc/guide/09-form-input-binding/01-basic/index.vue")
  },
  {
    path: "/guide/form-input/value-binding",
    name: "guide-form-input-value-binding",
    component: () =>
      import("../doc/guide/09-form-input-binding/02-value-binding/index.vue")
  },
  {
    path: "/guide/form-input/modifier",
    name: "guide-form-input-modifier",
    component: () =>
      import("../doc/guide/09-form-input-binding/03-modifiers/index.vue")
  },
  {
    path: "/guide/component-basic",
    name: "guide-component-basic",
    component: () => import("../doc/guide/10-component-basic/index.vue")
  },
  {
    path: "/guide/component-registration",
    name: "guide-component-registration",
    component: () => import("../doc/guide/11-component-registration/index.vue")
  },
  {
    path: "/guide/props",
    name: "guide-props",
    component: () => import("../doc/guide/12-props/index.vue")
  },
  {
    path: "/guide/custom-events",
    name: "guide-custom-events",
    component: () => import("../doc/guide/13-custom-events/index.vue")
  },
  {
    name: ROUTES.GUIDE_SLOTS_SLOT_CONTENT.NAME,
    path: ROUTES.GUIDE_SLOTS_SLOT_CONTENT.PATH,
    component: () => import("../doc/guide/14-slots/01-slot-content/C0101")
  },
  {
    name: ROUTES.GUIDE_SLOTS_NAMED_SLOT.NAME,
    path: ROUTES.GUIDE_SLOTS_NAMED_SLOT.PATH,
    component: () => import("../doc/guide/14-slots/02-named-slots/C0201")
  },
  {
    name: ROUTES.GUIDE_SLOTS_DEFAULT_SLOT_CONTENT.NAME,
    path: ROUTES.GUIDE_SLOTS_DEFAULT_SLOT_CONTENT.PATH,
    component: () =>
      import("../doc/guide/14-slots/03-default-slot-content/C0301")
  },
  {
    name: ROUTES.GUIDE_SLOTS_COMPILATION_SCOPE.NAME,
    path: ROUTES.GUIDE_SLOTS_COMPILATION_SCOPE.PATH,
    component: () => import("../doc/guide/14-slots/04-compilation-scope/C0401")
  },
  {
    name: ROUTES.GUIDE_SLOTS_SCOPED_SLOT.NAME,
    path: ROUTES.GUIDE_SLOTS_SCOPED_SLOT.PATH,
    component: () =>
      import("../doc/guide/14-slots/05-scoped-slot/slots-scoped-slots.vue")
  },
  {
    path: "/guide/dynamic-async-component",
    name: "guide-dynamic-async-component",
    component: () => import("../doc/guide/15-dynamic-async-component/index.vue")
  },
  {
    path: "/guide/handling-edge-cases",
    name: "guide-handling-edge-cases",
    component: () => import("../doc/guide/16-handling-edge-cases/index.vue")
  },
  {
    path: "/guide/transition-and-animation",
    name: "guide-transition-and-animation",
    component: () =>
      import("../doc/guide/17-enter-leave-list-transitions/index.vue")
  },
  {
    path: "/guide/state-transition",
    name: "guide-state-transition",
    component: () => import("../doc/guide/18-state-transitions/index.vue")
  },
  {
    path: "/guide/mixins",
    name: "guide-mixins",
    component: () => import("../doc/guide/19-mixins/index.vue")
  },
  {
    path: "/guide/custom-directives",
    name: "guide-custom-directives",
    component: () => import("../doc/guide/20-custom-directives/index.vue")
  },
  {
    path: "/guide/render-function-and-jsx",
    name: "guide-render-function-and-jsx",
    component: () =>
      import("../doc/guide/21-render-functions-and-jsx/index.vue")
  },
  {
    path: "/guide/plugins",
    name: "guide-plugins",
    component: () => import("../doc/guide/22-plugins/index.vue")
  },
  {
    path: "/guide/filters",
    name: "guide-filters",
    component: () => import("../doc/guide/23-filters/index.vue")
  }
];
