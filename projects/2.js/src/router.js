import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home },
    {
      path: '/guide',
      component: { template: '<router-view />' },
      children: [
        {
          path: 'introduction',
          component: () => import('./views/guide/introduction/Introduction'),
        },
        {
          path: 'instance',
          component: () => import('./views/guide/instance/Instance'),
        },
        {
          path: 'syntax',
          component: () => import('./views/guide/syntax/TemplateSyntax'),
        },
        {
          path: 'computed',
          component: () => import('./views/guide/computed/ComputedPropertiesWatchers'),
        },
        {
          path: 'class-and-style',
          component: () => import('./views/guide/class-and-style/ClassStyleBindings'),
        },
        {
          path: 'list',
          component: () => import('./views/guide/list/ListRendering'),
        },
        {
          path: 'events',
          component: () => import('./views/guide/events/EventHandling'),
        },
        {
          path: 'forms',
          component: () => import('./views/guide/forms/FormInputBindings'),
        },
        {
          path: 'components',
          component: () => import('./views/guide/components/ComponentBasics'),
        },
        {
          path: 'components-registration',
          component: () => import('./views/guide/components-registration/ComponentRegistration'),
        },
        {
          path: 'components-props',
          component: () => import('./views/guide/components-props/Props'),
        },
        {
          path: 'components-custom-events',
          component: () => import('./views/guide/components-custom-events/ComponentsCustomEvents'),
        },
        {
          path: 'components-slots',
          component: () => import('./views/guide/components-slots/Slots'),
        },
        {
          path: 'components-dynamic-async',
          component: () => import('./views/guide/components-dynamic-async/ComponentsDynamicAsync'),
        },
        {
          path: 'components-edge-cases',
          component: () => import('./views/guide/components-edge-cases/HandlingEdgeCases'),
        },
        {
          path: 'mixins',
          component: () => import('./views/guide/mixins/Mixins'),
        },
        {
          path: 'custom-directive',
          component: () => import('./views/guide/custom-directive/CustomDirectives'),
        },
        {
          path: 'plugins',
          component: () => import('./views/guide/plugins/Plugins'),
        },
      ],
    },
    {
      path: '/vuex',
      component: { template: '<router-view />' },
      children: [
        {
          path: 'guide',
          component: { template: '<router-view />' },
          children: [
            {
              path: 'introduction',
              component: () => import('./views/vuex/guide/introduction/TheSimplestStore'),
            },
            {
              path: 'state',
              component: () => import('./views/vuex/guide/state/State'),
            },
            {
              path: 'getters',
              component: () => import('./views/vuex/guide/getters/Getters'),
            },
            {
              path: 'mutations',
              component: () => import('./views/vuex/guide/mutations/Mutations'),
            },
            {
              path: 'actions',
              component: () => import('./views/vuex/guide/actions/Actions'),
            },
          ],
        },
      ],
    },
    {
      path: '/api/vm-watch',
      component: () => import(/* webpackChunkName: "api" */ './views/api/vm/Watch'),
    },
  ],
});
