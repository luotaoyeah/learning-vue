import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component(resolve) {
        require(["../components/home"], resolve);
      }
    },
    {
      path: "/guide/declarative-rendering",
      name: "DeclarativeRendering",
      component(resolve) {
        require(["../doc/guide/introduction/declarative-rendering"], resolve);
      }
    },
    {
      path: "/guide/conditional-and-loop",
      name: "ConditionalAndLoop",
      component(resolve) {
        require(["../doc/guide/introduction/conditional-and-loop"], resolve);
      }
    },
    {
      path: "/guide/handing-user-input",
      name: "HandingUserInput",
      component(resolve) {
        require(["../doc/guide/introduction/handing-user-input"], resolve);
      }
    },
    {
      path: "/guide/composing-with-components",
      name: "ComposingWithComponents",
      component(resolve) {
        require([
          "../doc/guide/introduction/composing-with-components"
        ], resolve);
      }
    },
    {
      path: "/guide/data-and-methods",
      name: "DataAndMethods",
      component(resolve) {
        require(["../doc/guide/the-vue-instance/data-and-methods"], resolve);
      }
    },
    {
      path: "/guide/template-syntax/interpolation",
      name: "template-syntax-interpolation",
      component(resolve) {
        require(["../doc/guide/template-syntax/interpolation/index"], resolve);
      }
    },
    {
      path: "/guide/template-syntax/directive",
      name: "template-syntax-directive",
      component(resolve) {
        require(["../doc/guide/template-syntax/directive/index"], resolve);
      }
    },
    {
      path: "/guide/computed-properties",
      name: "guide-computed-properties",
      component(resolve) {
        require([
          "../doc/guide/computed-properties-and-watchers/computed-properties/index"
        ], resolve);
      }
    },
    {
      path: "/guide/watchers",
      name: "guide-watchers",
      component(resolve) {
        require([
          "../doc/guide/computed-properties-and-watchers/watchers/index"
        ], resolve);
      }
    },
    {
      path: "/guide/class",
      name: "guide-class",
      component(resolve) {
        require(["../doc/guide/class-and-style/class/index"], resolve);
      }
    },
    {
      path: "/guide/style",
      name: "guide-style",
      component(resolve) {
        require(["../doc/guide/class-and-style/style/index"], resolve);
      }
    },
    {
      path: "/guide/conditional-rendering-v-if",
      name: "guide-conditional-rendering-v-if",
      component(resolve) {
        require(["../doc/guide/conditional-rendering/v-if/index"], resolve);
      }
    },
    {
      path: "/guide/conditional-rendering-v-show",
      name: "guide-conditional-rendering-v-show",
      component(resolve) {
        require(["../doc/guide/conditional-rendering/v-show/index"], resolve);
      }
    },
    {
      path: "/guide/list-rendering",
      name: "guide-list-rendering",
      component(resolve) {
        require(["../doc/guide/list-rendering/v-for/index"], resolve);
      }
    },
    {
      path: "/guide/event-handling",
      name: "guide-event-handling",
      component(resolve) {
        require(["../doc/guide/event-handling/index"], resolve);
      }
    },
    {
      path: "/guide/form-input/basic",
      name: "guide-form-input-basic",
      component(resolve) {
        require(["../doc/guide/form-input-binding/basic/index"], resolve);
      }
    },
    {
      path: "/guide/form-input/value-binding",
      name: "guide-form-input-value-binding",
      component(resolve) {
        require([
          "../doc/guide/form-input-binding/value-binding/index"
        ], resolve);
      }
    },
    {
      path: "/guide/form-input/modifier",
      name: "guide-form-input-modifier",
      component(resolve) {
        require(["../doc/guide/form-input-binding/modifier/index"], resolve);
      }
    },
    {
      path: "/guide/component-basic",
      name: "guide-component-basic",
      component(resolve) {
        require(["../doc/guide/component-basic/index"], resolve);
      }
    }
  ]
});
