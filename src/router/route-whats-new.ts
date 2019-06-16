import { ROUTES } from "./router-const";
import { RouteConfig } from "vue-router";

/**
 * whats new
 */
export const ROUTE_WHATS_NEW: Array<RouteConfig> = [
  {
    path: ROUTES.WHATS_NEW_2_6_OBSERVABLE.PATH,
    name: ROUTES.WHATS_NEW_2_6_OBSERVABLE.NAME,
    component: () =>
      import("../app/doc/whats-new/vue@2.6/01-vue-observable/C0101")
  },
  {
    path: ROUTES.WHATS_NEW_2_6_BIND_PROP_SHORTCUT.PATH,
    name: ROUTES.WHATS_NEW_2_6_BIND_PROP_SHORTCUT.NAME,
    component: () =>
      import("../app/doc/whats-new/vue@2.6/02-v-bind.prop-shortcut/C0201.vue")
  },
  {
    path: ROUTES.WHATS_NEW_2_6_CUSTOM_TOSTRING.PATH,
    name: ROUTES.WHATS_NEW_2_6_CUSTOM_TOSTRING.NAME,
    component: () =>
      import("../app/doc/whats-new/vue@2.6/03-custom-tostring/C0301.vue")
  },
  {
    path: ROUTES.WHATS_NEW_2_6_ASYNC_ERROR_HANDLING.PATH,
    name: ROUTES.WHATS_NEW_2_6_ASYNC_ERROR_HANDLING.NAME,
    component: () =>
      import("../app/doc/whats-new/vue@2.6/04-async-error-handling/C0401")
  },
  {
    path: ROUTES.WHATS_NEW_2_6_V_FOR_SUPPORT_ITERABLE.PATH,
    name: ROUTES.WHATS_NEW_2_6_V_FOR_SUPPORT_ITERABLE.NAME,
    component: () =>
      import("../app/doc/whats-new/vue@2.6/05-v-for-support-iterable/C0501.vue")
  },
  {
    path: ROUTES.WHATS_NEW_2_6_V_SLOT.PATH,
    name: ROUTES.WHATS_NEW_2_6_V_SLOT.NAME,
    component: () => import("../app/doc/whats-new/vue@2.6/06-v-slot/C06")
  },
  {
    path: ROUTES.WHATS_NEW_2_6_SCOPED_SLOTS.PATH,
    name: ROUTES.WHATS_NEW_2_6_SCOPED_SLOTS.NAME,
    component: () =>
      import(
        "../app/doc/whats-new/vue@2.6/07-add-scopedslots-to-context-in-functional-components/C07"
      )
  },
  {
    path: ROUTES.WHATS_NEW_2_6_DYNAMIC_DIRECTIVE_ARGUMENT.PATH,
    name: ROUTES.WHATS_NEW_2_6_DYNAMIC_DIRECTIVE_ARGUMENT.NAME,
    component: () =>
      import("../app/doc/whats-new/vue@2.6/08-dynamic-directive-arguments/C08")
  },
  {
    path: ROUTES.WHATS_NEW_2_6_ALL_SLOTS_ON_$SCOPEDSLOTS.PATH,
    name: ROUTES.WHATS_NEW_2_6_ALL_SLOTS_ON_$SCOPEDSLOTS.NAME,
    component: () =>
      import(
        "../app/doc/whats-new/vue@2.6/09-expose-all-normal-slots-on-$scopedslots-as-functions/C09"
      )
  },
  {
    path: ROUTES.WHATS_NEW_2_6_KEBAB_CASE_UPDATE.PATH,
    name: ROUTES.WHATS_NEW_2_6_KEBAB_CASE_UPDATE.NAME,
    component: () =>
      import(
        "../app/doc/whats-new/vue@2.6/10-v-bind.sync-also-listens-for-kebab-case-update-event/C10"
      )
  }
];
