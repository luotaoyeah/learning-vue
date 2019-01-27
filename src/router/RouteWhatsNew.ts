import { ROUTES } from "./RouterConst";
import { RouteConfig } from "vue-router";

/**
 * whats new
 */
export const ROUTE_WHATS_NEW: Array<RouteConfig> = [
  {
    path: ROUTES.WHATS_NEW_2_6_OBSERVABLE.PATH,
    name: ROUTES.WHATS_NEW_2_6_OBSERVABLE.NAME,
    component: () => import("../doc/whats-new/vue@2.6/01-vue-observable/C01")
  }
];
