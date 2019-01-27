import Vue from "vue";
import Router from "vue-router";
import { ROUTE_API } from "./RouteApi";
import { ROUTE_STYLE_GUIDE } from "./RouteStyleGuide";
import { ROUTE_GUIDE } from "./RouteGuide";

Vue.use(Router);

export default new Router({
  routes: [...ROUTE_GUIDE, ...ROUTE_STYLE_GUIDE, ...ROUTE_API]
});
