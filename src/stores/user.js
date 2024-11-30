import { defineStore } from 'pinia';
import UserService from '@/services/auth';
import { reactive, computed } from 'vue';
import { useAuthStore } from '@/stores/auth'; 
const userService = new UserService();

export const useCurrentUserStore = defineStore('currentUser', () => {
  const state = reactive({
    user: [], // Dados do usuário
    loading: false, // Indicador de carregamento
  });

  // Referência à store de autenticação para acessar o token
  const authStore = useAuthStore();

  // Computed para verificar se os dados do usuário estão carregados
  const isUserLoaded = computed(() => !!state.user);

  // Computed para verificar se o usuário tem privilégios de superusuário
  const isSuperUser = computed(() => state.user?.is_superuser || false);

  // Ações
  async function fetchCurrentUser() {
    if (!authStore.state.token) {
      console.error('Token de autenticação ausente.');
      return;
    }

    state.loading = true;

    try {
      const userData = await userService.getMeUser(authStore.state.token);
      state.user = userData; // Atualiza os dados do usuário
    } catch (error) {
      console.error('Erro ao buscar os dados do usuário:', error);
      throw error;
    } finally {
      state.loading = false;
    }
  }

  function clearCurrentUser() {
    state.user = null;
  }

  // Retorna os estados e métodos
  return {
    state,
    isUserLoaded,
    isSuperUser,
    fetchCurrentUser,
    clearCurrentUser,
  };
});
