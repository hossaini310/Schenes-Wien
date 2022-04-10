import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/TheHome.vue'),
    },
    {
      path: '/sightseeing',
      name: 'sightseeing',
      component: () => import('../views/TheSightseeing.vue'),
      children: [
        { path: '', component: () => import('../views/subViews/TheHighlights.vue') },
        { path: 'a2z', component: () => import('../views/subViews/TheA2Z.vue') },
      ],
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/TheEvents.vue'),
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: () => import('../views/TheShopping.vue'),
    },
    {
      path: '/lifestyle',
      name: 'lifestyle',
      component: () => import('../views/TheLifestyle.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
    },
  ],
});

export default router;
