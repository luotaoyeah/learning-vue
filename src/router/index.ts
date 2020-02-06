import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/guide/introduction/declarative-rendering',
    component: () => import('../views/guide/introduction/declarative-rendering.vue'),
  },
  {
    path: '/guide/introduction/handling-user-input',
    component: () => import('../views/guide/introduction/handling-user-input.vue'),
  },
  {
    path: '/guide/introduction/conditionals-and-loops',
    component: () => import('../views/guide/introduction/conditionals-and-loops.vue'),
  },
  {
    path: '/guide/template-syntax/interpolations',
    component: () => import('../views/guide/template-syntax/interpolations.vue'),
  },
  {
    path: '/guide/template-syntax/directives',
    component: () => import('../views/guide/template-syntax/directives.vue'),
  },
  {
    path: '/guide/template-syntax/shorthands',
    component: () => import('../views/guide/template-syntax/shorthands.vue'),
  },
  {
    path: '/guide/data-methods/data-properties',
    component: () => import('../views/guide/data-methods/data-properties.vue'),
  },
  {
    path: '/guide/data-methods/methods',
    component: () => import('../views/guide/data-methods/methods.vue'),
  },
  {
    path: '/guide/computed/basic-example',
    component: () => import('../views/guide/computed/computed-properties/basic-example.vue'),
  },
  {
    path: '/guide/computed/computed-caching-vs-methods',
    component: () => import('../views/guide/computed/computed-properties/computed-caching-vs-methods.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
