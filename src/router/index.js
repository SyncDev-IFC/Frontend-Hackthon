import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/auth/LoginView.vue'
import AlunoView from '@/views/AlunoView.vue';
import HomeView from '../views/HomeView.vue';
import TurmasView from '@/views/turmas/TurmasView.vue';
import TurmasEspView from '@/views/turmas/TurmasEspView.vue';
import ConselhoEntrarView from '@/views/ConselhoEntrar/ConselhoEntrarView.vue';
import TesteInterligacao from '@/views/TesteInterligacao.vue';
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
  },
  
  {
    path: '/a',
    name: 'Test',
    component: TurmaAluno,
  },
  {
    path: '/entrar-conselho',
    name: 'Entrar',
    component: ConselhoEntrarView,
    component: TurmaAluno,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
