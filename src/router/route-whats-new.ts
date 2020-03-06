import { ROUTES } from "./router-const";
import { RouteConfig } from "vue-router";

/**
 * whats new
 */
export const ROUTE_WHATS_NEW: Array<RouteConfig> = [
  {
    path: ROUTES._04_01_01.PATH,
    name: ROUTES._04_01_01.NAME,
    component: () =>
      import("../app/doc/whats-new/vue@2.6/01-vue-observable/C0101")
  },
  {
    path: ROUTES._04_01_02.PATH,
    name: ROUTES._04_01_02.NAME,
    component: () =>
      import("../app/doc/whats-new/vue@2.6/02-v-bind.prop-shortcut/C0201.vue")
  },
  {
    path: ROUTES._04_01_03.PATH,
    name: ROUTES._04_01_03.NAME,
    component: () =>
      import("../app/doc/whats-new/vue@2.6/03-custom-tostring/C0301.vue")
  },
  {
    path: ROUTES._04_01_04.PATH,
    name: ROUTES._04_01_04.NAME,
    component: () =>
      import("../app/doc/whats-new/vue@2.6/04-async-error-handling/C0401")
  },
  {
    path: ROUTES._04_01_05.PATH,
    name: ROUTES._04_01_05.NAME,
    component: () =>
      import("../app/doc/whats-new/vue@2.6/05-v-for-support-iterable/C0501.vue")
  },
  {
    path: ROUTES._04_01_06.PATH,
    name: ROUTES._04_01_06.NAME,
    component: () => import("../app/doc/whats-new/vue@2.6/06-v-slot/C06")
  },
  {
    path: ROUTES._04_01_07.PATH,
    name: ROUTES._04_01_07.NAME,
    component: () =>
      import(
        "../app/doc/whats-new/vue@2.6/07-add-scopedslots-to-context-in-functional-components/C07"
      )
  },
  {
    path: ROUTES._04_01_08.PATH,
    name: ROUTES._04_01_08.NAME,
    component: () =>
      import("../app/doc/whats-new/vue@2.6/08-dynamic-directive-arguments/C08")
  },
  {
    path: ROUTES._04_01_09.PATH,
    name: ROUTES._04_01_09.NAME,
    component: () =>
      import(
        "../app/doc/whats-new/vue@2.6/09-expose-all-normal-slots-on-$scopedslots-as-functions/C09"
      )
  },
  {
    path: ROUTES._04_01_10.PATH,
    name: ROUTES._04_01_10.NAME,
    component: () =>
      import(
        "../app/doc/whats-new/vue@2.6/10-v-bind.sync-also-listens-for-kebab-case-update-event/C10"
      )
  }
];
