import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/auth/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import TestComponent from '@/views/TestComponent.vue';
import TesteInterligacao from '@/views/TesteInterligacao.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/teste',
    name: 'Teste',
    component: TesteInterligacao,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
