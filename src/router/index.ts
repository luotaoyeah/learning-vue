import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/introduction/declarative-rendering',
    component: () => import('../views/guide/introduction/declarative-rendering.vue'),
  },
  {
    path: '/introduction/handling-user-input',
    component: () => import('../views/guide/introduction/handling-user-input.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
