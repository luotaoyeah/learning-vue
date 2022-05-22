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
    {
      path: '/guide/essentials/list',
      name: 'guide/essentials/list',
      component: () => import('../views/guide/essentials/List.vue'),
    },
    {
      path: '/guide/essentials/event-handling',
      name: 'guide/essentials/event-handling',
      component: () => import('../views/guide/essentials/EventHandling.vue'),
    },
    {
      path: '/guide/essentials/forms',
      name: 'guide/essentials/forms',
      component: () => import('../views/guide/essentials/Forms.vue'),
    },
    {
      path: '/guide/essentials/lifecycle',
      name: 'guide/essentials/lifecycle',
      component: () => import('../views/guide/essentials/Lifecycle.vue'),
    },
    {
      path: '/guide/essentials/watchers',
      name: 'guide/essentials/watchers',
      component: () => import('../views/guide/essentials/Watchers.vue'),
    },
    {
      path: '/guide/essentials/template-refs',
      name: 'guide/essentials/template-refs',
      component: () => import('../views/guide/essentials/TemplateRefs.vue'),
    },
  ],
});

export default router;
