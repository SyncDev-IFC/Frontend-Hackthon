import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/auth/LoginView.vue'
import TestComponent from '@/views/TestComponent.vue';

const routes = [
  {
    path: '/',
    name: '',
    component: TestComponent,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
