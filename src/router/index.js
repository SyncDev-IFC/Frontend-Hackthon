import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/auth/LoginView.vue'
import TestComponent from '@/views/TestComponent.vue';
import HomeView from '@/views/HomeView.vue';

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
    path: '/test',
    name: 'Test',
    component: TestComponent,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
