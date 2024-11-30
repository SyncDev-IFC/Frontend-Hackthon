import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/auth/LoginView.vue'
import AlunoView from '@/views/AlunoView.vue';
import HomeView from '../views/HomeView.vue';
import TurmasView from '@/views/turmas/TurmasView.vue';
import TurmasEspView from '@/views/turmas/TurmasEspView.vue';
<<<<<<< HEAD
import ConselhoEntrarView from '@/views/ConselhoEntrar/ConselhoEntrarView.vue';
import TestComponent from '@/views/TestComponent.vue';
=======
import TesteInterligacao from '@/views/TesteInterligacao.vue';
import AlunosView from '@/views/AlunosView.vue';

>>>>>>> 0d13b2f (Refactor App.vue and remove duplicate router-view)
import { useAuthStore } from '@/stores/auth'; 
import TurmaAluno from '@/views/turmas/TurmaAluno.vue';
const routes = [
  {
    path: '/',
    name: 'Login', 
    component: LoginView,
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
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
    path: '/turmas',
    name: 'Turmas',
    component: TurmasView,
  },
  {
    path: '/turma',
    name: 'Turma',
    component: TurmasEspView, 
  },
<<<<<<< HEAD
  
  {
    path: '/a',
    name: 'Test',
    component: TurmaAluno,
  },
  {
    path: '/entrar-conselho',
    name: 'Entrar',
    component: ConselhoEntrarView,
  }
=======
 

>>>>>>> 0d13b2f (Refactor App.vue and remove duplicate router-view)
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
