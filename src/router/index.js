import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/auth/LoginView.vue'
import AlunoView from '@/views/AlunoView.vue';

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
    path: '/aluno',
    name: 'Aluno',
    component: AlunoView,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
