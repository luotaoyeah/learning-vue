import { RouteConfig } from "vue-router";

/**
 * style guide
 */
export const ROUTE_STYLE_GUIDE: Array<RouteConfig> = [
  {
    path: "/guide/reactivity-in-depth",
    name: "01-24",
    component: () => import("../app/doc/guide/24-reactivity-in-depth/C24")
  },
  {
    path: "/style-guide/essential",
    name: "02-01",
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
