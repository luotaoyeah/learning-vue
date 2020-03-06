import { RouteConfig } from "vue-router";
import { ROUTES } from "./router-const";

/**
 * style guide
 */
const ROUTE_STYLE_GUIDE: Array<RouteConfig> = [
  {
    path: ROUTES._02_01.PATH,
    name: ROUTES._02_01.NAME,
    component: () => import("../app/doc/style-guide/01-essential/index.vue")
  },
  {
    path: "/style-guide/strongly-recommend",
    name: "02-02",
    component: () =>
      import("../app/doc/style-guide/02-strongly-recommend/index.vue")
  },
  {
    path: "/style-guide/recommend",
    name: "02-03",
    component: () => import("../app/doc/style-guide/03-recommend/index.vue")
  },
  {
    path: "/style-guide/use-with-caution",
    name: "02-04",
    component: () =>
      import("../app/doc/style-guide/04-use-with-caution/index.vue")
  }
];

export { ROUTE_STYLE_GUIDE };
