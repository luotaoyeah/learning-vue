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
    }
  ]
});
