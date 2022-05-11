import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import HomeStartBtn from '../components/HomeStartBtn.vue';
import HomeData from '../components/HomeData.vue';
import Setting from '../components/Setting.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        { path: '', name: 'homeStartBtn', component: HomeStartBtn },
        {
          path: '/data',
          name: 'homeData',
          component: HomeData,
        },
        {
          path: '/setting',
          name: 'setting',
          component: Setting,
        },
      ],
    },
    {
      path: '/test',
      name: 'test-word',
      component: () => import('../views/TestWord.vue'),
    },
  ],
});

export default router;
