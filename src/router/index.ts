import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/home'),
  },
  {
    path: '/doc/guide/introduction/declarative-rendering',
    component: () => import('../views/doc/guide/essentials/introduction/declarative-rendering.vue'),
  },
  {
    path: '/doc/guide/introduction/handling-user-input',
    component: () => import('../views/doc/guide/essentials/introduction/handling-user-input.vue'),
  },
  {
    path: '/doc/guide/introduction/conditionals-and-loops',
    component: () => import('../views/doc/guide/essentials/introduction/conditionals-and-loops.vue'),
  },
  {
    path: '/doc/guide/template-syntax/interpolations',
    component: () => import('../views/doc/guide/essentials/template-syntax/interpolations.vue'),
  },
  {
    path: '/doc/guide/template-syntax/directives',
    component: () => import('../views/doc/guide/essentials/template-syntax/directives.vue'),
  },
  {
    path: '/doc/guide/template-syntax/shorthands',
    component: () => import('../views/doc/guide/essentials/template-syntax/shorthands.vue'),
  },
  {
    path: '/doc/guide/data-methods/data-properties',
    component: () => import('../views/doc/guide/essentials/data-methods/data-properties.vue'),
  },
  {
    path: '/doc/guide/data-methods/methods',
    component: () => import('../views/doc/guide/essentials/data-methods/methods.vue'),
  },
  {
    path: '/doc/guide/computed/basic-example',
    component: () => import('../views/doc/guide/essentials/computed/computed-properties/basic-example.vue'),
  },
  {
    path: '/doc/guide/computed/computed-caching-vs-methods',
    component: () =>
      import('../views/doc/guide/essentials/computed/computed-properties/computed-caching-vs-methods.vue'),
  },
  {
    path: '/doc/guide/computed/computed-setter',
    component: () => import('../views/doc/guide/essentials/computed/computed-properties/computed-setter.vue'),
  },
  {
    path: '/doc/guide/computed/watchers',
    component: () => import('../views/doc/guide/essentials/computed/watchers.vue'),
  },
  {
    path: '/doc/guide/class-and-style/object-syntax',
    component: () => import('../views/doc/guide/essentials/class-and-style/binding-html-classes/object-syntax.vue'),
  },
  {
    path: '/doc/guide/class-and-style/array-syntax',
    component: () => import('../views/doc/guide/essentials/class-and-style/binding-html-classes/array-syntax.vue'),
  },
  {
    path: '/doc/guide/class-and-style/with-components',
    component: () =>
      import('../views/doc/guide/essentials/class-and-style/binding-html-classes/with-components/with-components.vue'),
  },
  {
    path: '/doc/guide/class-and-style/binding-inline-styles/object-syntax',
    component: () => import('../views/doc/guide/essentials/class-and-style/binding-inline-styles/object-syntax.vue'),
  },
  {
    path: '/doc/guide/class-and-style/binding-inline-styles/array-syntax',
    component: () => import('../views/doc/guide/essentials/class-and-style/binding-inline-styles/array-syntax.vue'),
  },
  {
    path: '/doc/guide/conditional/v-if/conditional-groups-with-v-if-on-template',
    component: () =>
      import('../views/doc/guide/essentials/conditional-rendering/v-if/conditional-groups-with-v-if-on-template.vue'),
  },
  {
    path: '/doc/guide/conditional/v-if/v-else',
    component: () => import('../views/doc/guide/essentials/conditional-rendering/v-if/v-else.vue'),
  },
  {
    path: '/doc/guide/conditional/v-if/v-else-if',
    component: () => import('../views/doc/guide/essentials/conditional-rendering/v-if/v-else-if.vue'),
  },
  {
    path: '/doc/guide/conditional/v-show',
    component: () => import('../views/doc/guide/essentials/conditional-rendering/v-show.vue'),
  },
  {
    path: '/doc/guide/conditional/v-if-with-v-for',
    component: () => import('../views/doc/guide/essentials/conditional-rendering/v-if-with-v-for.vue'),
  },
  {
    path: '/doc/guide/list/mapping-an-array-to-elements-with-v-for',
    component: () => import('../views/doc/guide/essentials/list/mapping-an-array-to-elements-with-v-for.vue'),
  },
  {
    path: '/doc/guide/list/v-for-with-an-object',
    component: () => import('../views/doc/guide/essentials/list/v-for-with-an-object.vue'),
  },
  {
    path: '/doc/guide/list/maintaining-state',
    component: () => import('../views/doc/guide/essentials/list/maintaining-state.vue'),
  },
  {
    path: '/doc/guide/list/array-change-detection/mutation-methods',
    component: () => import('../views/doc/guide/essentials/list/array-change-detection/mutation-methods.vue'),
  },
  {
    path: '/doc/guide/list/array-change-detection/replacing-an-array',
    component: () => import('../views/doc/guide/essentials/list/array-change-detection/replacing-an-array.vue'),
  },
  {
    path: '/doc/guide/list/displaying-filtered-sorted-results',
    component: () => import('../views/doc/guide/essentials/list/displaying-filtered-sorted-results.vue'),
  },
  {
    path: '/doc/guide/list/v-for-with-a-range',
    component: () => import('../views/doc/guide/essentials/list/v-for-with-a-range.vue'),
  },
  {
    path: '/doc/guide/list/v-for-on-a-template',
    component: () => import('../views/doc/guide/essentials/list/v-for-on-a-template.vue'),
  },
  {
    path: '/doc/guide/list/v-for-with-a-component',
    component: () => import('../views/doc/guide/essentials/list/v-for-with-a-component.vue'),
  },
  {
    path: '/doc/guide/events/listening-to-events',
    component: () => import('../views/doc/guide/essentials/events/listening-to-events.vue'),
  },
  {
    path: '/doc/guide/events/method-event-handlers',
    component: () => import('../views/doc/guide/essentials/events/method-event-handlers.vue'),
  },
  {
    path: '/doc/guide/events/methods-in-inline-handlers',
    component: () => import('../views/doc/guide/essentials/events/methods-in-inline-handlers.vue'),
  },
  {
    path: '/doc/guide/events/multiple-event-handlers',
    component: () => import('../views/doc/guide/essentials/events/multiple-event-handlers.vue'),
  },
  {
    path: '/doc/guide/events/event-modifiers',
    component: () => import('../views/doc/guide/essentials/events/event-modifiers.vue'),
  },
  {
    path: '/doc/guide/events/key-modifiers',
    component: () => import('../views/doc/guide/essentials/events/key-modifiers.vue'),
  },
  {
    path: '/doc/guide/events/system-modifier-keys',
    component: () => import('../views/doc/guide/essentials/events/system-modifier-keys/system-modifier-keys.vue'),
  },
  {
    path: '/doc/guide/forms/text',
    component: () => import('../views/doc/guide/essentials/forms/text.vue'),
  },
  {
    path: '/doc/guide/forms/checkbox',
    component: () => import('../views/doc/guide/essentials/forms/checkbox.vue'),
  },
  {
    path: '/doc/guide/forms/radio',
    component: () => import('../views/doc/guide/essentials/forms/radio.vue'),
  },
  {
    path: '/doc/guide/forms/select',
    component: () => import('../views/doc/guide/essentials/forms/select.vue'),
  },
  {
    path: '/doc/guide/forms/modifiers',
    component: () => import('../views/doc/guide/essentials/forms/modifiers.vue'),
  },
  {
    path: '/doc/guide/component-basics/base-example',
    component: () => import('../views/doc/guide/essentials/component-basics/base-example.vue'),
  },
  {
    path: '/doc/guide/component-basics/passing-data-to-child-components-with-props',
    component: () =>
      import('../views/doc/guide/essentials/component-basics/passing-data-to-child-components-with-props.vue'),
  },
  {
    path: '/doc/guide/component-basics/listening-to-child-components-events',
    component: () => import('../views/doc/guide/essentials/component-basics/listening-to-child-components-events.vue'),
  },
  {
    path: '/doc/guide/component-basics/content-distribution-with-slots',
    component: () => import('../views/doc/guide/essentials/component-basics/content-distribution-with-slots.vue'),
  },
  {
    path: '/doc/guide/component-basics/dynamic-components',
    component: () => import('../views/doc/guide/essentials/component-basics/dynamic-components/dynamic-components.vue'),
  },
  {
    path: '/doc/guide/component-basics/dom-template-parsing-caveats',
    component: () =>
      import(
        '../views/doc/guide/essentials/component-basics/dom-template-parsing-caveats/dom-template-parsing-caveats.vue'
      ),
  },
  {
    path: '/doc/guide/component-registration/component-registration',
    component: () => import('../views/doc/guide/components-in-depth/component-registration/component-registration.vue'),
  },
  {
    path: '/doc/guide/component-props/prop-types',
    component: () => import('../views/doc/guide/components-in-depth/component-props/prop-types.vue'),
  },
  {
    path: '/doc/guide/component-props/passing-static-or-dynamic-props',
    component: () =>
      import('../views/doc/guide/components-in-depth/component-props/passing-static-or-dynamic-props.vue'),
  },
  {
    path: '/doc/guide/component-props/one-way-data-flow',
    component: () => import('../views/doc/guide/components-in-depth/component-props/one-way-data-flow.vue'),
  },
  {
    path: '/doc/guide/component-props/prop-validation',
    component: () => import('../views/doc/guide/components-in-depth/component-props/prop-validation.vue'),
  },
  {
    path: '/doc/guide/component-attrs/non-prop-attributes',
    component: () => import('../views/doc/guide/components-in-depth/component-attrs/non-prop-attributes.vue'),
  },
  {
    path: '/doc/guide/component-attrs/attribute-inheritance',
    component: () => import('../views/doc/guide/components-in-depth/component-attrs/attribute-inheritance.vue'),
  },
  {
    path: '/doc/guide/component-attrs/disabling-attribute-inheritance',
    component: () =>
      import('../views/doc/guide/components-in-depth/component-attrs/disabling-attribute-inheritance.vue'),
  },
  {
    path: '/doc/guide/component-custom-events/event-names',
    component: () => import('../views/doc/guide/components-in-depth/component-custom-events/event-names.vue'),
  },
  {
    path: '/doc/guide/component-custom-events/defining-custom-events',
    component: () =>
      import('../views/doc/guide/components-in-depth/component-custom-events/defining-custom-events.vue'),
  },
  {
    path: '/doc/guide/component-custom-events/v-model-arguments',
    component: () => import('../views/doc/guide/components-in-depth/component-custom-events/v-model-arguments.vue'),
  },
  {
    path: '/doc/guide/component-custom-events/multiple-v-model-bindings',
    component: () =>
      import('../views/doc/guide/components-in-depth/component-custom-events/multiple-v-model-bindings.vue'),
  },
  {
    path: '/doc/guide/component-custom-events/handling-v-model-modifiers',
    component: () =>
      import('../views/doc/guide/components-in-depth/component-custom-events/handling-v-model-modifiers.vue'),
  },
  {
    path: '/doc/guide/component-slots/slot-content',
    component: () => import('../views/doc/guide/components-in-depth/component-slots/slot-content.vue'),
  },
  {
    path: '/doc/guide/component-slots/render-scope',
    component: () => import('../views/doc/guide/components-in-depth/component-slots/render-scope.vue'),
  },
  {
    path: '/doc/guide/component-slots/fallback-content',
    component: () => import('../views/doc/guide/components-in-depth/component-slots/fallback-content.vue'),
  },
  {
    path: '/doc/guide/component-slots/named-slots',
    component: () => import('../views/doc/guide/components-in-depth/component-slots/named-slots.vue'),
  },
  {
    path: '/doc/guide/component-slots/scoped-slots',
    component: () => import('../views/doc/guide/components-in-depth/component-slots/scoped-slots.vue'),
  },
  {
    path: '/doc/guide/component-slots/named-slots-shorthand',
    component: () => import('../views/doc/guide/components-in-depth/component-slots/named-slots-shorthand.vue'),
  },
  {
    path: '/doc/guide/component-provide-inject/provide-inject',
    component: () => import('../views/doc/guide/components-in-depth/component-provide-inject/provide-inject.vue'),
  },
  {
    path: '/doc/guide/component-dynamic-async/dynamic-components-with-keep-alive',
    component: () =>
      import('../views/doc/guide/components-in-depth/component-dynamic-async/dynamic-components-with-keep-alive.vue'),
  },
  {
    path: '/doc/guide/component-dynamic-async/async-components',
    component: () => import('../views/doc/guide/components-in-depth/component-dynamic-async/async-components.vue'),
  },
  {
    path: '/doc/guide/component-template-refs/template-refs',
    component: () => import('../views/doc/guide/components-in-depth/component-template-refs/template-refs.vue'),
  },
  {
    path: '/doc/guide/custom-directive/intro',
    component: () => import('../views/doc/guide/reusability-composition/custom-directive/intro.vue'),
  },
  {
    path: '/doc/guide/custom-directive/hook-functions',
    component: () => import('../views/doc/guide/reusability-composition/custom-directive/hook-functions.vue'),
  },
  {
    path: '/doc/guide/custom-directive/dynamic-directive-arguments',
    component: () =>
      import('../views/doc/guide/reusability-composition/custom-directive/dynamic-directive-arguments.vue'),
  },
  {
    path: '/doc/guide/custom-directive/usage-on-components',
    component: () => import('../views/doc/guide/reusability-composition/custom-directive/usage-on-components.vue'),
  },
  {
    path: '/doc/guide/teleport/teleport',
    component: () => import('../views/doc/guide/reusability-composition/teleport/teleport.vue'),
  },
  {
    path: '/doc/guide/render-function/render-functions',
    component: () => import('../views/doc/guide/reusability-composition/render-function/render-functions.vue'),
  },
  {
    path: '/doc/guide/render-function/constraints',
    component: () => import('../views/doc/guide/reusability-composition/render-function/constraints.vue'),
  },
  {
    path: '/doc/guide/render-function/replacing-template-features-with-plain-javascript',
    component: () =>
      import(
        '../views/doc/guide/reusability-composition/render-function/replacing-template-features-with-plain-javascript/replacing-template-features-with-plain-javascript.vue'
      ),
  },
  {
    path: '/doc/guide/render-function/jsx',
    component: () => import('../views/doc/guide/reusability-composition/render-function/jsx/jsx'),
  },
  {
    path: '/doc/guide/plugins/plugins',
    component: () => import('../views/doc/guide/reusability-composition/plugins/plugins.vue'),
  },
  {
    path: '/doc/guide/reactivity-fundamentals/declaring-reactive-state',
    component: () => import('../views/doc/guide/reactivity/reactivity-fundamentals/declaring-reactive-state'),
  },
  {
    path: '/doc/guide/reactivity-fundamentals/creating-standalone-reactive-values-as-refs',
    component: () =>
      import('../views/doc/guide/reactivity/reactivity-fundamentals/creating-standalone-reactive-values-as-refs'),
  },
  {
    path: '/doc/guide/reactivity-fundamentals/ref-unwrapping',
    component: () => import('../views/doc/guide/reactivity/reactivity-fundamentals/ref-unwrapping'),
  },
  {
    path: '/doc/guide/reactivity-fundamentals/access-in-reactive-objects',
    component: () => import('../views/doc/guide/reactivity/reactivity-fundamentals/access-in-reactive-objects'),
  },
  {
    path: '/doc/guide/reactivity-fundamentals/destructuring-reactive-state',
    component: () => import('../views/doc/guide/reactivity/reactivity-fundamentals/destructuring-reactive-state'),
  },
  {
    path: '/doc/guide/reactivity-fundamentals/prevent-mutating-reactive-objects-with-readonly',
    component: () =>
      import('../views/doc/guide/reactivity/reactivity-fundamentals/prevent-mutating-reactive-objects-with-readonly'),
  },
  {
    path: '/doc/guide/reactivity-computed-watchers/computed-values',
    component: () => import('../views/doc/guide/reactivity/reactivity-computed-watchers/computed-values'),
  },
  {
    path: '/doc/guide/reactivity-computed-watchers/watch-effect',
    component: () => import('../views/doc/guide/reactivity/reactivity-computed-watchers/watch-effect/watch-effect'),
  },
  {
    path: '/doc/guide/reactivity-computed-watchers/watch',
    component: () => import('../views/doc/guide/reactivity/reactivity-computed-watchers/watch/watch'),
  },
  {
    path: '/doc/guide/composition-api-setup/arguments',
    component: () => import('../views/doc/guide/composition-api/composition-api-setup/arguments'),
  },
  {
    path: '/doc/guide/composition-api-setup/usage-with-templates',
    component: () => import('../views/doc/guide/composition-api/composition-api-setup/usage-with-templates'),
  },
  {
    path: '/doc/guide/composition-api-setup/usage-with-render-functions',
    component: () => import('../views/doc/guide/composition-api/composition-api-setup/usage-with-render-functions'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
