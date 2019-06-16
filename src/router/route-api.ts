import { ROUTES } from "./router-const";
import { RouteConfig } from "vue-router";

/**
 * API
 */
export const ROUTE_API: Array<RouteConfig> = [
  {
    path: "/api/global-config",
    name: "api-global-config",
    component: () => import("../app/doc/api/01-global-config/index.vue")
  },
  {
    path: "/api/global-api",
    name: "api-global-api",
    component: () => import("../app/doc/api/02-global-api/index.vue")
  },
  {
    path: ROUTES.API_OPTIONS_DATA.PATH,
    name: ROUTES.API_OPTIONS_DATA.NAME,
    component: () => import("../app/doc/api/03-options-data/index.vue")
  },
  {
    path: "/api/options-dom",
    name: "api-options-dom",
    component: () => import("../app/doc/api/04-options-dom/index.vue")
  },
  {
    path: "/api/options-lifecycle-hooks",
    name: "api-options-lifecycle-hooks",
    component: () =>
      import("../app/doc/api/05-options-lifecycle-hooks/index.vue")
  },
  {
    path: "/api/options-assets",
    name: "api-options-assets",
    component: () => import("../app/doc/api/06-options-assets/index.vue")
  },
  {
    path: ROUTES.API_OPTIONS_COMPOSITION.PATH,
    name: ROUTES.API_OPTIONS_COMPOSITION.NAME,
    component: () => import("../app/doc/api/07-options-composition/index.vue")
  },
  {
    path: ROUTES.API_OPTIONS_MISC.PATH,
    name: ROUTES.API_OPTIONS_MISC.NAME,
    component: () => import("../app/doc/api/08-options-misc/index.vue")
  },
  {
    path: ROUTES.API_INSTANCE_PROPERTIES.PATH,
    name: ROUTES.API_INSTANCE_PROPERTIES.NAME,
    component: () => import("../app/doc/api/09-instance-properties/index.vue")
  },
  {
    path: ROUTES.API_INSTANCE_METHODS_DATA.PATH,
    name: ROUTES.API_INSTANCE_METHODS_DATA.NAME,
    component: () => import("../app/doc/api/10-instance-methods-data/index.vue")
  },
  {
    path: ROUTES.API_INSTANCE_METHODS_EVENTS.PATH,
    name: ROUTES.API_INSTANCE_METHODS_EVENTS.NAME,
    component: () =>
      import("../app/doc/api/11-instance-methods-events/index.vue")
  },
  {
    path: ROUTES.API_INSTANCE_METHODS_LIFECYCLE.PATH,
    name: ROUTES.API_INSTANCE_METHODS_LIFECYCLE.NAME,
    component: () =>
      import("../app/doc/api/12-instance-methods-lifecycle/index.vue")
  },
  {
    path: "/api/directives",
    name: "api-directives",
    component: () => import("../app/doc/api/13-directives/index.vue")
  },
  {
    path: ROUTES.API_SPECIAL_ATTRIBUTES.PATH,
    name: ROUTES.API_SPECIAL_ATTRIBUTES.NAME,
    component: () => import("../app/doc/api/14-special-attributes/index.vue")
  },
  {
    path: ROUTES.API_BUILTIN_COMPONENTS.PATH,
    name: ROUTES.API_BUILTIN_COMPONENTS.NAME,
    component: () => import("../app/doc/api/15-builtin-components/index.vue")
  }
];
