import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/auth/LoginView.vue'
import AlunoView from '@/views/AlunoView.vue';
import HomeView from '../views/HomeView.vue';
import TurmasView from '@/views/turmas/TurmasView.vue';
import TurmasEspView from '@/views/turmas/TurmasEspView.vue';
import ConselhoEntrarView from '@/views/ConselhoEntrar/ConselhoEntrarView.vue';
import AlunosView from '@/views/AlunosView.vue';

import { useAuthStore } from '@/stores/auth'; 
import  ForgotPasswordView  from '@/views/auth/ForgotPasswordView.vue';
import  ResetPasswordView  from '@/views/auth/ResetPasswordView.vue';
import CursosView from '@/views/CursosView.vue';
import TurmaInfoView from '@/views/turmas/TurmaInfoView.vue';
import { components } from 'vuetify/dist/vuetify-labs.js';

const routes = [
  {
    path: '/',
    name: 'Login', 
    component: LoginView,
  },
  {
    path: '/home',
    name: 'Home',
    component: TurmasView,
    props: true,
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (authStore.isLogged) {
        next();
      } else {
        next('/'); 
      }
    }
  },
  {
    path: '/alunos/',
    name: 'Alunos',
    component: AlunosView,
    props: true
  },
  {
    path: '/aluno/:id',
    name: 'Aluno',
    component: AlunoView,
    props: true
  },
  {
    path: '/turma/:id',
    name: 'Turma',
    component: TurmasEspView, 
    props: true
  },
  {
    path: '/entrar-conselho',
    name: 'Entrar',
    component: ConselhoEntrarView,
  },
  {
    path: '/recuperar-senha',
    name: 'ForgotPassword',
    component: ForgotPasswordView,
  },
  {
    path: '/reset-senha',
    name: 'ResetPassword',
    component: ResetPasswordView,
  },
  {
    path: '/cursos',
    name: 'Curso',
    component: CursosView, 
  },
  {
    path: '/informatica',
    name: 'Informática',
    component: TurmaInfoView, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
