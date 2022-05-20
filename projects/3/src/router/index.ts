import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/guide/essentials/template-syntax',
      name: 'guide/essentials/template-syntax',
      component: () => import('../views/guide/essentials/TemplateSyntax.vue'),
    },
    {
      path: '/guide/essentials/reactivity-fundamentals',
      name: 'guide/essentials/reactivity-fundamentals',
      component: () => import('../views/guide/essentials/ReactivityFundamentals.vue'),
    },
    {
      path: '/guide/essentials/computed',
      name: 'guide/essentials/computed',
      component: () => import('../views/guide/essentials/Computed.vue'),
    },
    {
      path: '/guide/essentials/class-and-style',
      name: 'guide/essentials/class-and-style',
      component: () => import('../views/guide/essentials/ClassAndStyle.vue'),
    },
  ],
});

export default router;
