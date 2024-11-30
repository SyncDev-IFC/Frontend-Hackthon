import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/auth/LoginView.vue'
import AlunoView from '@/views/AlunoView.vue';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/auth/LoginView.vue';
import TurmasView from '@/views/turmas/TurmasView.vue';
import TurmasEspView from '@/views/turmas/TurmasEspView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  }
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
  {
    path: '/turmas',
    name: 'Turmas',
    component: TurmasView,
  },
  {
    path: '/turma',
    name: 'Turma',
    component: TurmasEspView, 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
