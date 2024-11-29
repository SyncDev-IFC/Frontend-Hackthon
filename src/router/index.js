import { createRouter, createWebHistory } from 'vue-router';
import TestComponent from '@/views/TestComponent.vue';
import LoginView from '../views/LoginView.vue'


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
