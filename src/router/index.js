import { createRouter, createWebHistory } from 'vue-router';
import testWord from '../views/TestWord.vue';
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
      path: '/test',
      name: 'test-word',
      component: () => import('../views/TestWord.vue'),
    },
  ],
});

export default router;
