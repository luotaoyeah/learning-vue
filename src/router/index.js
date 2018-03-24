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
    }
  ]
});
