import Vue from "vue";
import Router from "vue-router";
import { ROUTES } from "./RouterConst";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: ROUTES.GUIDE_INTRODUCTION_DECLARATIVE_RENDERING.PATH,
      name: ROUTES.GUIDE_INTRODUCTION_DECLARATIVE_RENDERING.NAME,
      component(resolve) {
        require([
          "../doc/guide/01-introduction/declarative-rendering"
        ], resolve);
      }
    },
    {
      path: ROUTES.GUIDE_INTRODUCTION_CONDITIONAL_AND_LOOP.PATH,
      name: ROUTES.GUIDE_INTRODUCTION_CONDITIONAL_AND_LOOP.NAME,
      component(resolve) {
        require(["../doc/guide/01-introduction/conditional-and-loop"], resolve);
      }
    },
    {
      path: "/guide/handing-user-input",
      name: "HandingUserInput",
      component(resolve) {
        require(["../doc/guide/01-introduction/handing-user-input"], resolve);
      }
    },
    {
      path: "/guide/composing-with-components",
      name: "ComposingWithComponents",
      component(resolve) {
        require([
          "../doc/guide/01-introduction/composing-with-components"
        ], resolve);
      }
    },
    {
      path: "/guide/data-and-methods",
      name: "DataAndMethods",
      component(resolve) {
        require(["../doc/guide/02-the-vue-instance/data-and-methods"], resolve);
      }
    },
    {
      path: "/guide/template-syntax/interpolation",
      name: "template-syntax-interpolation",
      component(resolve) {
        require([
          "../doc/guide/03-template-syntax/interpolation/index"
        ], resolve);
      }
    },
    {
      path: "/guide/template-syntax/directive",
      name: "template-syntax-directive",
      component(resolve) {
        require(["../doc/guide/03-template-syntax/directive/index"], resolve);
      }
    },
    {
      path: "/guide/computed-properties",
      name: "guide-computed-properties",
      component(resolve) {
        require([
          "../doc/guide/04-computed-properties-and-watchers/computed-properties/index"
        ], resolve);
      }
    },
    {
      path: "/guide/watchers",
      name: "guide-watchers",
      component(resolve) {
        require([
          "../doc/guide/04-computed-properties-and-watchers/watchers/index"
        ], resolve);
      }
    },
    {
      path: "/guide/class",
      name: "guide-class",
      component(resolve) {
        require(["../doc/guide/05-class-and-style/class/index"], resolve);
      }
    },
    {
      path: "/guide/style",
      name: "guide-style",
      component(resolve) {
        require(["../doc/guide/05-class-and-style/style/index"], resolve);
      }
    },
    {
      path: "/guide/conditional-rendering-v-if",
      name: "guide-conditional-rendering-v-if",
      component(resolve) {
        require(["../doc/guide/06-conditional-rendering/v-if/index"], resolve);
      }
    },
    {
      path: "/guide/conditional-rendering-v-show",
      name: "guide-conditional-rendering-v-show",
      component(resolve) {
        require([
          "../doc/guide/06-conditional-rendering/v-show/index"
        ], resolve);
      }
    },
    {
      path: "/guide/list-rendering",
      name: "guide-list-rendering",
      component(resolve) {
        require(["../doc/guide/07-list-rendering/v-for/index"], resolve);
      }
    },
    {
      path: "/guide/event-handling",
      name: "guide-event-handling",
      component(resolve) {
        require(["../doc/guide/08-event-handling/index"], resolve);
      }
    },
    {
      path: "/guide/form-input/basic",
      name: "guide-form-input-basic",
      component(resolve) {
        require(["../doc/guide/09-form-input-binding/01-basic/index"], resolve);
      }
    },
    {
      path: "/guide/form-input/value-binding",
      name: "guide-form-input-value-binding",
      component(resolve) {
        require([
          "../doc/guide/09-form-input-binding/02-value-binding/index"
        ], resolve);
      }
    },
    {
      path: "/guide/form-input/modifier",
      name: "guide-form-input-modifier",
      component(resolve) {
        require([
          "../doc/guide/09-form-input-binding/03-modifiers/index"
        ], resolve);
      }
    },
    {
      path: "/guide/component-basic",
      name: "guide-component-basic",
      component(resolve) {
        require(["../doc/guide/10-component-basic/index"], resolve);
      }
    },
    {
      path: "/guide/component-registration",
      name: "guide-component-registration",
      component(resolve) {
        require(["../doc/guide/11-component-registration/index"], resolve);
      }
    },
    {
      path: "/guide/props",
      name: "guide-props",
      component(resolve) {
        require(["../doc/guide/12-props/index"], resolve);
      }
    },
    {
      path: "/guide/custom-events",
      name: "guide-custom-events",
      component(resolve) {
        require(["../doc/guide/13-custom-events/index"], resolve);
      }
    },
    {
      path: "/guide/slots",
      name: "guide-slots",
      component(resolve) {
        require(["../doc/guide/14-slots/index"], resolve);
      }
    },
    {
      path: "/guide/dynamic-async-component",
      name: "guide-dynamic-async-component",
      component(resolve) {
        require(["../doc/guide/15-dynamic-async-component/index"], resolve);
      }
    },
    {
      path: "/guide/handling-edge-cases",
      name: "guide-handling-edge-cases",
      component(resolve) {
        require(["../doc/guide/16-handling-edge-cases/index"], resolve);
      }
    },
    {
      path: "/guide/transition-and-animation",
      name: "guide-transition-and-animation",
      component(resolve) {
        require([
          "../doc/guide/17-enter-leave-list-transitions/index"
        ], resolve);
      }
    },
    {
      path: "/guide/state-transition",
      name: "guide-state-transition",
      component(resolve) {
        require(["../doc/guide/18-state-transitions/index"], resolve);
      }
    },
    {
      path: "/guide/mixins",
      name: "guide-mixins",
      component(resolve) {
        require(["../doc/guide/19-mixins/index"], resolve);
      }
    },
    {
      path: "/guide/custom-directives",
      name: "guide-custom-directives",
      component(resolve) {
        require(["../doc/guide/20-custom-directives/index"], resolve);
      }
    },
    {
      path: "/guide/render-function-and-jsx",
      name: "guide-render-function-and-jsx",
      component(resolve) {
        require(["../doc/guide/21-render-functions-and-jsx/index"], resolve);
      }
    },
    {
      path: "/guide/plugins",
      name: "guide-plugins",
      component(resolve) {
        require(["../doc/guide/22-plugins/index"], resolve);
      }
    },
    {
      path: "/guide/filters",
      name: "guide-filters",
      component(resolve) {
        require(["../doc/guide/23-filters/index"], resolve);
      }
    },
    /* style guide ---------------------------------------------------------------------------------------------------- */
    {
      path: "/guide/reactivity-in-depth",
      name: "guide-reactivity-in-depth",
      component(resolve) {
        require(["../doc/guide/24-reactivity-in-depth/index"], resolve);
      }
    },
    {
      path: "/style-guide/essential",
      name: "style-guide-essential",
      component(resolve) {
        require(["../doc/style-guide/01-essential/index"], resolve);
      }
    },
    {
      path: "/style-guide/strongly-recommend",
      name: "style-guide-strongly-recommend",
      component(resolve) {
        require(["../doc/style-guide/02-strongly-recommend/index"], resolve);
      }
    },
    {
      path: "/style-guide/recommend",
      name: "style-guide-recommend",
      component(resolve) {
        require(["../doc/style-guide/03-recommend/index"], resolve);
      }
    },
    {
      path: "/style-guide/use-with-caution",
      name: "style-guide-use-with-caution",
      component(resolve) {
        require(["../doc/style-guide/04-use-with-caution/index"], resolve);
      }
    },
    /* api ---------------------------------------------------------------------------------------------------- */
    {
      path: "/api/global-config",
      name: "api-global-config",
      component(resolve) {
        require(["../doc/api/01-global-config/index"], resolve);
      }
    },
    {
      path: "/api/global-api",
      name: "api-global-api",
      component(resolve) {
        require(["../doc/api/02-global-api/index"], resolve);
      }
    },
    {
      path: ROUTES.API_OPTIONS_DATA.PATH,
      name: ROUTES.API_OPTIONS_DATA.NAME,
      component(resolve) {
        require(["../doc/api/03-options-data/index"], resolve);
      }
    },
    {
      path: "/api/options-dom",
      name: "api-options-dom",
      component(resolve) {
        require(["../doc/api/04-options-dom/index"], resolve);
      }
    },
    {
      path: "/api/options-lifecycle-hooks",
      name: "api-options-lifecycle-hooks",
      component(resolve) {
        require(["../doc/api/05-options-lifecycle-hooks/index"], resolve);
      }
    },
    {
      path: "/api/options-assets",
      name: "api-options-assets",
      component(resolve) {
        require(["../doc/api/06-options-assets/index"], resolve);
      }
    },
    {
      path: ROUTES.API_OPTIONS_COMPOSITION.PATH,
      name: ROUTES.API_OPTIONS_COMPOSITION.NAME,
      component(resolve) {
        require(["../doc/api/07-options-composition/index"], resolve);
      }
    },
    {
      path: ROUTES.API_OPTIONS_MISC.PATH,
      name: ROUTES.API_OPTIONS_MISC.NAME,
      component(resolve) {
        require(["../doc/api/08-options-misc/index"], resolve);
      }
    },
    {
      path: ROUTES.API_INSTANCE_PROPERTIES.PATH,
      name: ROUTES.API_INSTANCE_PROPERTIES.NAME,
      component(resolve) {
        require(["../doc/api/09-instance-properties/index"], resolve);
      }
    },
    {
      path: ROUTES.API_INSTANCE_METHODS_DATA.PATH,
      name: ROUTES.API_INSTANCE_METHODS_DATA.NAME,
      component(resolve) {
        require(["../doc/api/10-instance-methods-data/index"], resolve);
      }
    },
    {
      path: ROUTES.API_INSTANCE_METHODS_EVENTS.PATH,
      name: ROUTES.API_INSTANCE_METHODS_EVENTS.NAME,
      component(resolve) {
        require(["../doc/api/11-instance-methods-events/index"], resolve);
      }
    },
    {
      path: ROUTES.API_INSTANCE_METHODS_LIFECYCLE.PATH,
      name: ROUTES.API_INSTANCE_METHODS_LIFECYCLE.NAME,
      component(resolve) {
        require(["../doc/api/12-instance-methods-lifecycle/index"], resolve);
      }
    },
    {
      path: "/api/directives",
      name: "api-directives",
      component(resolve) {
        require(["../doc/api/13-directives/index"], resolve);
      }
    },
    {
      path: "/api/special-attributes",
      name: "api-special-attributes",
      component(resolve) {
        require(["../doc/api/14-special-attributes/index"], resolve);
      }
    },
    {
      path: "/api/builtin-components",
      name: "api-builtin-components",
      component(resolve) {
        require(["../doc/api/15-builtin-components/index"], resolve);
      }
    }
  ]
});
