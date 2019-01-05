import Vue from "vue";
import Router from "vue-router";
import { ROUTES } from "./RouterConst";

Vue.use(Router);

export default new Router({
  routes: [
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
      component: () =>
        import("../doc/guide/11-component-registration/index.vue")
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
      path: "/guide/slots",
      name: "guide-slots",
      component: () => import("../doc/guide/14-slots/index.vue")
    },
    {
      path: "/guide/dynamic-async-component",
      name: "guide-dynamic-async-component",
      component: () =>
        import("../doc/guide/15-dynamic-async-component/index.vue")
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
    },
    /* style guide ---------------------------------------------------------------------------------------------------- */
    {
      path: "/guide/reactivity-in-depth",
      name: "guide-reactivity-in-depth",
      component: () => import("../doc/guide/24-reactivity-in-depth/index.vue")
    },
    {
      path: "/style-guide/essential",
      name: "style-guide-essential",
      component: () => import("../doc/style-guide/01-essential/index.vue")
    },
    {
      path: "/style-guide/strongly-recommend",
      name: "style-guide-strongly-recommend",
      component: () =>
        import("../doc/style-guide/02-strongly-recommend/index.vue")
    },
    {
      path: "/style-guide/recommend",
      name: "style-guide-recommend",
      component: () => import("../doc/style-guide/03-recommend/index.vue")
    },
    {
      path: "/style-guide/use-with-caution",
      name: "style-guide-use-with-caution",
      component: () =>
        import("../doc/style-guide/04-use-with-caution/index.vue")
    },
    /* api ---------------------------------------------------------------------------------------------------- */
    {
      path: "/api/global-config",
      name: "api-global-config",
      component: () => import("../doc/api/01-global-config/index.vue")
    },
    {
      path: "/api/global-api",
      name: "api-global-api",
      component: () => import("../doc/api/02-global-api/index.vue")
    },
    {
      path: ROUTES.API_OPTIONS_DATA.PATH,
      name: ROUTES.API_OPTIONS_DATA.NAME,
      component: () => import("../doc/api/03-options-data/index.vue")
    },
    {
      path: "/api/options-dom",
      name: "api-options-dom",
      component: () => import("../doc/api/04-options-dom/index.vue")
    },
    {
      path: "/api/options-lifecycle-hooks",
      name: "api-options-lifecycle-hooks",
      component: () => import("../doc/api/05-options-lifecycle-hooks/index.vue")
    },
    {
      path: "/api/options-assets",
      name: "api-options-assets",
      component: () => import("../doc/api/06-options-assets/index.vue")
    },
    {
      path: ROUTES.API_OPTIONS_COMPOSITION.PATH,
      name: ROUTES.API_OPTIONS_COMPOSITION.NAME,
      component: () => import("../doc/api/07-options-composition/index.vue")
    },
    {
      path: ROUTES.API_OPTIONS_MISC.PATH,
      name: ROUTES.API_OPTIONS_MISC.NAME,
      component: () => import("../doc/api/08-options-misc/index.vue")
    },
    {
      path: ROUTES.API_INSTANCE_PROPERTIES.PATH,
      name: ROUTES.API_INSTANCE_PROPERTIES.NAME,
      component: () => import("../doc/api/09-instance-properties/index.vue")
    },
    {
      path: ROUTES.API_INSTANCE_METHODS_DATA.PATH,
      name: ROUTES.API_INSTANCE_METHODS_DATA.NAME,
      component: () => import("../doc/api/10-instance-methods-data/index.vue")
    },
    {
      path: ROUTES.API_INSTANCE_METHODS_EVENTS.PATH,
      name: ROUTES.API_INSTANCE_METHODS_EVENTS.NAME,
      component: () => import("../doc/api/11-instance-methods-events/index.vue")
    },
    {
      path: ROUTES.API_INSTANCE_METHODS_LIFECYCLE.PATH,
      name: ROUTES.API_INSTANCE_METHODS_LIFECYCLE.NAME,
      component: () =>
        import("../doc/api/12-instance-methods-lifecycle/index.vue")
    },
    {
      path: "/api/directives",
      name: "api-directives",
      component: () => import("../doc/api/13-directives/index.vue")
    },
    {
      path: ROUTES.API_SPECIAL_ATTRIBUTES.PATH,
      name: ROUTES.API_SPECIAL_ATTRIBUTES.NAME,
      component: () => import("../doc/api/14-special-attributes/index.vue")
    },
    {
      path: ROUTES.API_BUILTIN_COMPONENTS.PATH,
      name: ROUTES.API_BUILTIN_COMPONENTS.NAME,
      component: () => import("../doc/api/15-builtin-components/index.vue")
    }
  ]
});
