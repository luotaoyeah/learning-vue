import { RouteConfig } from "vue-router";

/**
 * style guide
 */
export const ROUTE_STYLE_GUIDE: Array<RouteConfig> = [
  {
    path: "/guide/reactivity-in-depth",
    name: "guide-reactivity-in-depth",
    component: () => import("../app/doc/guide/24-reactivity-in-depth/C24")
  },
  {
    path: "/style-guide/essential",
    name: "style-guide-essential",
    component: () => import("../app/doc/style-guide/01-essential/index.vue")
  },
  {
    path: "/style-guide/strongly-recommend",
    name: "style-guide-strongly-recommend",
    component: () =>
      import("../app/doc/style-guide/02-strongly-recommend/index.vue")
  },
  {
    path: "/style-guide/recommend",
    name: "style-guide-recommend",
    component: () => import("../app/doc/style-guide/03-recommend/index.vue")
  },
  {
    path: "/style-guide/use-with-caution",
    name: "style-guide-use-with-caution",
    component: () =>
      import("../app/doc/style-guide/04-use-with-caution/index.vue")
  }
];
