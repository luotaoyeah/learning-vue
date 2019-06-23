import { ROUTES } from "./router-const";
import { RouteConfig } from "vue-router";

/**
 * API
 */
export const ROUTE_API: Array<RouteConfig> = [
  {
    path: ROUTES._03_01_04.PATH,
    name: ROUTES._03_01_04.NAME,
    component: () =>
      import("../app/doc/api/01-global-config/04-error-handler/C0104")
  },
  {
    path: "/api/global-api",
    name: "03-02",
    component: () => import("../app/doc/api/02-global-api/index.vue")
  },
  {
    path: ROUTES._03_03_01.PATH,
    name: ROUTES._03_03_01.NAME,
    component: () => import("../app/doc/api/03-options-data/index.vue")
  },
  {
    path: "/api/options-dom",
    name: "03-03-02",
    component: () => import("../app/doc/api/04-options-dom/index.vue")
  },
  {
    path: "/api/options-lifecycle-hooks",
    name: "03-03-03",
    component: () =>
      import("../app/doc/api/05-options-lifecycle-hooks/index.vue")
  },
  {
    path: "/api/options-assets",
    name: "03-03-04",
    component: () => import("../app/doc/api/06-options-assets/index.vue")
  },
  {
    path: ROUTES._03_03_05.PATH,
    name: ROUTES._03_03_05.NAME,
    component: () => import("../app/doc/api/07-options-composition/index.vue")
  },
  {
    path: ROUTES._03_03_06.PATH,
    name: ROUTES._03_03_06.NAME,
    component: () => import("../app/doc/api/08-options-misc/index.vue")
  },
  {
    path: ROUTES._03_04.PATH,
    name: ROUTES._03_04.NAME,
    component: () => import("../app/doc/api/09-instance-properties/index.vue")
  },
  {
    path: ROUTES._03_05_01.PATH,
    name: ROUTES._03_05_01.NAME,
    component: () => import("../app/doc/api/10-instance-methods-data/index.vue")
  },
  {
    path: ROUTES._03_05_02.PATH,
    name: ROUTES._03_05_02.NAME,
    component: () =>
      import("../app/doc/api/11-instance-methods-events/index.vue")
  },
  {
    path: ROUTES._03_05_03.PATH,
    name: ROUTES._03_05_03.NAME,
    component: () =>
      import("../app/doc/api/12-instance-methods-lifecycle/index.vue")
  },
  {
    path: "/api/directives",
    name: "03-06",
    component: () => import("../app/doc/api/13-directives/index.vue")
  },
  {
    path: ROUTES._03_07.PATH,
    name: ROUTES._03_07.NAME,
    component: () => import("../app/doc/api/14-special-attributes/index.vue")
  },
  {
    path: ROUTES._03_08.PATH,
    name: ROUTES._03_08.NAME,
    component: () => import("../app/doc/api/15-builtin-components/index.vue")
  }
];
