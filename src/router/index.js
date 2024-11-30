import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/auth/LoginView.vue'
import AlunoView from '@/views/AlunoView.vue';
import HomeView from '../views/HomeView.vue';
import TurmasView from '@/views/turmas/TurmasView.vue';
import TurmasEspView from '@/views/turmas/TurmasEspView.vue';
import TestComponent from '@/views/TestComponent.vue';
import TesteInterligacao from '@/views/TesteInterligacao.vue';
import { useAuthStore } from '@/stores/auth'; 

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
