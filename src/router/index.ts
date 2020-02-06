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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
