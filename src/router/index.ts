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
  {
    path: '/doc/guide/events/methods-in-inline-handlers',
    component: () => import('../views/doc/guide/events/methods-in-inline-handlers.vue'),
  },
  {
    path: '/doc/guide/events/multiple-event-handlers',
    component: () => import('../views/doc/guide/events/multiple-event-handlers.vue'),
  },
  {
    path: '/doc/guide/events/event-modifiers',
    component: () => import('../views/doc/guide/events/event-modifiers.vue'),
  },
  {
    path: '/doc/guide/events/key-modifiers',
    component: () => import('../views/doc/guide/events/key-modifiers.vue'),
  },
  {
    path: '/doc/guide/events/system-modifier-keys',
    component: () => import('../views/doc/guide/events/system-modifier-keys/system-modifier-keys.vue'),
  },
  {
    path: '/doc/guide/forms/text',
    component: () => import('../views/doc/guide/forms/text.vue'),
  },
  {
    path: '/doc/guide/forms/checkbox',
    component: () => import('../views/doc/guide/forms/checkbox.vue'),
  },
  {
    path: '/doc/guide/forms/radio',
    component: () => import('../views/doc/guide/forms/radio.vue'),
  },
  {
    path: '/doc/guide/forms/select',
    component: () => import('../views/doc/guide/forms/select.vue'),
  },
  {
    path: '/doc/guide/forms/modifiers',
    component: () => import('../views/doc/guide/forms/modifiers.vue'),
  },
  {
    path: '/doc/guide/component-basics/base-example',
    component: () => import('../views/doc/guide/component-basics/base-example.vue'),
  },
  {
    path: '/doc/guide/component-basics/passing-data-to-child-components-with-props',
    component: () => import('../views/doc/guide/component-basics/passing-data-to-child-components-with-props.vue'),
  },
  {
    path: '/doc/guide/component-basics/listening-to-child-components-events',
    component: () => import('../views/doc/guide/component-basics/listening-to-child-components-events.vue'),
  },
  {
    path: '/doc/guide/component-basics/content-distribution-with-slots',
    component: () => import('../views/doc/guide/component-basics/content-distribution-with-slots.vue'),
  },
  {
    path: '/doc/guide/component-basics/dynamic-components',
    component: () => import('../views/doc/guide/component-basics/dynamic-components/dynamic-components.vue'),
  },
  {
    path: '/doc/guide/component-basics/dom-template-parsing-caveats',
    component: () =>
      import('../views/doc/guide/component-basics/dom-template-parsing-caveats/dom-template-parsing-caveats.vue'),
  },
  {
    path: '/doc/guide/component-registration/component-registration',
    component: () => import('../views/doc/guide/component-registration/component-registration.vue'),
  },
  {
    path: '/doc/guide/component-props/prop-types',
    component: () => import('../views/doc/guide/component-props/prop-types.vue'),
  },
  {
    path: '/doc/guide/component-props/passing-static-or-dynamic-props',
    component: () => import('../views/doc/guide/component-props/passing-static-or-dynamic-props.vue'),
  },
  {
    path: '/doc/guide/component-props/one-way-data-flow',
    component: () => import('../views/doc/guide/component-props/one-way-data-flow.vue'),
  },
  {
    path: '/doc/guide/component-props/prop-validation',
    component: () => import('../views/doc/guide/component-props/prop-validation.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
