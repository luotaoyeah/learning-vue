import { ROUTES } from "./router-const";
import { RouteConfig } from "vue-router";

/**
 * packages
 */
const ROUTE_PKGS: Array<RouteConfig> = [
  {
    path: ROUTES._05_03_40.PATH,
    name: ROUTES._05_03_40.NAME,
    component: () => import("../app/pkgs/03-ant-design-vue/40-tootltip/C0340")
  }
];

export { ROUTE_PKGS };
