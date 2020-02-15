import Home from '@/views/home.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/doc/guide/introduction/declarative-rendering',
    component: () => import('../views/doc/guide/introduction/declarative-rendering.vue'),
  },
  {
    path: '/doc/guide/introduction/handling-user-input',
    component: () => import('../views/doc/guide/introduction/handling-user-input.vue'),
  },
  {
    path: '/doc/guide/introduction/conditionals-and-loops',
    component: () => import('../views/doc/guide/introduction/conditionals-and-loops.vue'),
  },
  {
    path: '/doc/guide/template-syntax/interpolations',
    component: () => import('../views/doc/guide/template-syntax/interpolations.vue'),
  },
  {
    path: '/doc/guide/template-syntax/directives',
    component: () => import('../views/doc/guide/template-syntax/directives.vue'),
  },
  {
    path: '/doc/guide/template-syntax/shorthands',
    component: () => import('../views/doc/guide/template-syntax/shorthands.vue'),
  },
  {
    path: '/doc/guide/data-methods/data-properties',
    component: () => import('../views/doc/guide/data-methods/data-properties.vue'),
  },
  {
    path: '/doc/guide/data-methods/methods',
    component: () => import('../views/doc/guide/data-methods/methods.vue'),
  },
  {
    path: '/doc/guide/computed/basic-example',
    component: () => import('../views/doc/guide/computed/computed-properties/basic-example.vue'),
  },
  {
    path: '/doc/guide/computed/computed-caching-vs-methods',
    component: () => import('../views/doc/guide/computed/computed-properties/computed-caching-vs-methods.vue'),
  },
  {
    path: '/doc/guide/computed/computed-setter',
    component: () => import('../views/doc/guide/computed/computed-properties/computed-setter.vue'),
  },
  {
    path: '/doc/guide/computed/watchers',
    component: () => import('../views/doc/guide/computed/watchers.vue'),
  },
  {
    path: '/doc/guide/class-and-style/object-syntax',
    component: () => import('../views/doc/guide/class-and-style/binding-html-classes/object-syntax.vue'),
  },
  {
    path: '/doc/guide/class-and-style/array-syntax',
    component: () => import('../views/doc/guide/class-and-style/binding-html-classes/array-syntax.vue'),
  },
  {
    path: '/doc/guide/class-and-style/with-components',
    component: () =>
      import('../views/doc/guide/class-and-style/binding-html-classes/with-components/with-components.vue'),
  },
  {
    path: '/doc/guide/class-and-style/binding-inline-styles/object-syntax',
    component: () => import('../views/doc/guide/class-and-style/binding-inline-styles/object-syntax.vue'),
  },
  {
    path: '/doc/guide/class-and-style/binding-inline-styles/array-syntax',
    component: () => import('../views/doc/guide/class-and-style/binding-inline-styles/array-syntax.vue'),
  },
  {
    path: '/doc/guide/conditional/v-if/conditional-groups-with-v-if-on-template',
    component: () =>
      import('../views/doc/guide/conditional-rendering/v-if/conditional-groups-with-v-if-on-template.vue'),
  },
  {
    path: '/doc/guide/conditional/v-if/v-else',
    component: () => import('../views/doc/guide/conditional-rendering/v-if/v-else.vue'),
  },
  {
    path: '/doc/guide/conditional/v-if/v-else-if',
    component: () => import('../views/doc/guide/conditional-rendering/v-if/v-else-if.vue'),
  },
  {
    path: '/doc/guide/conditional/v-show',
    component: () => import('../views/doc/guide/conditional-rendering/v-show.vue'),
  },
  {
    path: '/doc/guide/conditional/v-if-with-v-for',
    component: () => import('../views/doc/guide/conditional-rendering/v-if-with-v-for.vue'),
  },
  {
    path: '/doc/guide/list/mapping-an-array-to-elements-with-v-for',
    component: () => import('../views/doc/guide/list/mapping-an-array-to-elements-with-v-for.vue'),
  },
  {
    path: '/doc/guide/list/v-for-with-an-object',
    component: () => import('../views/doc/guide/list/v-for-with-an-object.vue'),
  },
  {
    path: '/doc/guide/list/maintaining-state',
    component: () => import('../views/doc/guide/list/maintaining-state.vue'),
  },
  {
    path: '/doc/guide/list/array-change-detection/mutation-methods',
    component: () => import('../views/doc/guide/list/array-change-detection/mutation-methods.vue'),
  },
  {
    path: '/doc/guide/list/array-change-detection/replacing-an-array',
    component: () => import('../views/doc/guide/list/array-change-detection/replacing-an-array.vue'),
  },
  {
    path: '/doc/guide/list/displaying-filtered-sorted-results',
    component: () => import('../views/doc/guide/list/displaying-filtered-sorted-results.vue'),
  },
  {
    path: '/doc/guide/list/v-for-with-a-range',
    component: () => import('../views/doc/guide/list/v-for-with-a-range.vue'),
  },
  {
    path: '/doc/guide/list/v-for-on-a-template',
    component: () => import('../views/doc/guide/list/v-for-on-a-template.vue'),
  },
  {
    path: '/doc/guide/list/v-for-with-a-component',
    component: () => import('../views/doc/guide/list/v-for-with-a-component.vue'),
  },
  {
    path: '/doc/guide/events/listening-to-events',
    component: () => import('../views/doc/guide/events/listening-to-events.vue'),
  },
  {
    path: '/doc/guide/events/method-event-handlers',
    component: () => import('../views/doc/guide/events/method-event-handlers.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
