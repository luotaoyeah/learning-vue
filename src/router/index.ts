import Vue from "vue";
import Router from "vue-router";
import { ROUTE_API } from "./route-api";
import { ROUTE_STYLE_GUIDE } from "./route-style-guide";
import { ROUTE_GUIDE } from "./route-guide";
import { ROUTE_WHATS_NEW } from "./route-whats-new";
import { ROUTE_PKGS } from "./route-pkgs";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("../components/App"),
      children: [
        ...ROUTE_GUIDE,
        ...ROUTE_API,
        ...ROUTE_STYLE_GUIDE,
        ...ROUTE_WHATS_NEW,
        ...ROUTE_PKGS
      ]
    }
  ]
});
