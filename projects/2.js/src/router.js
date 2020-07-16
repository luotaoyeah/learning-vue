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
      path: '/guide/introduction',
      component: () => import(/* webpackChunkName: "guide" */ './views/guide/introduction/Introduction'),
    },
    {
      path: '/guide/instance',
      component: () => import(/* webpackChunkName: "guide" */ './views/guide/instance/Instance'),
    },
    {
      path: '/guide/syntax',
      component: () => import(/* webpackChunkName: "guide" */ './views/guide/syntax/TemplateSyntax'),
    },
    {
      path: '/guide/computed',
      component: () => import(/* webpackChunkName: "guide" */ './views/guide/computed/ComputedPropertiesWatchers'),
    },
    {
      path: '/guide/class-and-style',
      component: () => import(/* webpackChunkName: "guide" */ './views/guide/class-and-style/ClassStyleBindings'),
    },
    {
      path: '/guide/list',
      component: () => import(/* webpackChunkName: "guide" */ './views/guide/list/ListRendering'),
    },
    {
      path: '/guide/events',
      component: () => import(/* webpackChunkName: "guide" */ './views/guide/events/EventHandling'),
    },
    {
      path: '/guide/forms',
      component: () => import(/* webpackChunkName: "guide" */ './views/guide/forms/FormInputBindings'),
    },
    {
      path: '/guide/components',
      component: () => import(/* webpackChunkName: "guide" */ './views/guide/components/ComponentBasics'),
    },
    {
      path: '/guide/components-registration',
      component: () => import(/* webpackChunkName: "guide" */ './views/guide/components-registration/ComponentRegistration'),
    },
    {
      path: '/guide/components-props',
      component: () => import(/* webpackChunkName: "guide" */ './views/guide/components-props/Props'),
    },
    {
      path: '/guide/components-custom-events',
      component: () => import(/* webpackChunkName: "guide" */ './views/guide/components-custom-events/ComponentsCustomEvents'),
    },
    {
      path: '/guide/components-slots',
      component: () => import(/* webpackChunkName: "guide" */ './views/guide/components-slots/Slots'),
    },
    {
      path: '/guide/components-dynamic-async',
      component: () => import(/* webpackChunkName: "guide" */ './views/guide/components-dynamic-async/ComponentsDynamicAsync'),
    },
    {
      path: '/guide/components-edge-cases',
      component: () => import(/* webpackChunkName: "guide" */ './views/guide/components-edge-cases/HandlingEdgeCases'),
    },
    {
      path: '/api/vm-watch',
      component: () => import(/* webpackChunkName: "api" */ './views/api/vm/Watch'),
    },
  ],
});
