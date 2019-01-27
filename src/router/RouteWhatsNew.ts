import { ROUTES } from "./RouterConst";
import { RouteConfig } from "vue-router";

/**
 * whats new
 */
export const ROUTE_WHATS_NEW: Array<RouteConfig> = [
  {
    path: ROUTES.WHATS_NEW_2_6_OBSERVABLE.PATH,
    name: ROUTES.WHATS_NEW_2_6_OBSERVABLE.NAME,
    component: () => import("../doc/whats-new/vue@2.6/01-vue-observable/C0101")
  },
  {
    path: ROUTES.WHATS_NEW_2_6_BIND_PROP_SHORTCUT.PATH,
    name: ROUTES.WHATS_NEW_2_6_BIND_PROP_SHORTCUT.NAME,
    component: () =>
      import("../doc/whats-new/vue@2.6/02-v-bind.prop-shortcut/C0201.vue")
  },
  {
    path: ROUTES.WHATS_NEW_2_6_CUSTOM_TOSTRING.PATH,
    name: ROUTES.WHATS_NEW_2_6_CUSTOM_TOSTRING.NAME,
    component: () =>
      import("../doc/whats-new/vue@2.6/03-custom-tostring/C0301.vue")
  }
];
