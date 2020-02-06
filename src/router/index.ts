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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
