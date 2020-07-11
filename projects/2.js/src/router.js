import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: () => import(/* webpackChunkName: "about" */ './views/About') },
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
  ],
});
