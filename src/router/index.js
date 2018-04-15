import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/guide/declarative-rendering",
      name: "DeclarativeRendering",
      component(resolve) {
        require([
          "../doc/guide/01-introduction/declarative-rendering"
        ], resolve);
      }
    },
    {
      path: "/guide/conditional-and-loop",
      name: "ConditionalAndLoop",
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
        require(["../doc/guide/09-form-input-binding/basic/index"], resolve);
      }
    },
    {
      path: "/guide/form-input/value-binding",
      name: "guide-form-input-value-binding",
      component(resolve) {
        require([
          "../doc/guide/09-form-input-binding/value-binding/index"
        ], resolve);
      }
    },
    {
      path: "/guide/form-input/modifier",
      name: "guide-form-input-modifier",
      component(resolve) {
        require(["../doc/guide/09-form-input-binding/modifier/index"], resolve);
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
    }
  ]
});
