import { createRouter, createWebHistory } from 'vue-router';
import HeaderView from '@/components/HeaderView.vue';

const routes = [
  {
    path: '/',
    name: '',
    component: HeaderView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
