import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component(resolve) {
        require(["../components/Home"], resolve);
      }
    },
    {
      path: "/guide/declarative-rendering",
      name: "DeclarativeRendering",
      component(resolve) {
        require(["../doc/guide/introduction/DeclarativeRendering"], resolve);
      }
    },
    {
      path: "/guide/conditional-and-loop",
      name: "ConditionalAndLoop",
      component(resolve) {
        require(["../doc/guide/introduction/ConditionalAndLoop"], resolve);
      }
    },
    {
      path: "/guide/handing-user-input",
      name: "HandingUserInput",
      component(resolve) {
        require(["../doc/guide/introduction/HandingUserInput"], resolve);
      }
    }
  ]
});
