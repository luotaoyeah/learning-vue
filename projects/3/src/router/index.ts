import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
    {
      path: '/guide/essentials/component-basics',
      name: 'guide/essentials/component-basics',
      component: () => import('../views/guide/essentials/ComponentBasics.vue'),
    },
    {
      path: '/guide/components/registration',
      name: 'guide/components/registration',
      component: () => import('../views/guide/components/Registration.vue'),
    },
    {
      path: '/guide/components/props',
      name: 'guide/components/props',
      component: () => import('../views/guide/components/Props.vue'),
    },
    {
      path: '/guide/components/events',
      name: 'guide/components/events',
      component: () => import('../views/guide/components/Events.vue'),
    },
    {
      path: '/guide/components/v-model',
      name: 'guide/components/v-model',
      component: () => import('../views/guide/components/VModel.vue'),
    },
  ],
});

export default router;
