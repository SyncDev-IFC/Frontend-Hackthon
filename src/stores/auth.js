  import { defineStore } from 'pinia';
  import AuthService from '@/services/auth';
  import { reactive, computed } from 'vue';
  import { useLoadingStore } from '@/stores/loading';

  const authService = new AuthService();

  export const useAuthStore = defineStore('auth', () => {
    const state = reactive({
      token: localStorage.getItem('authToken') || null,
    });

    const loadingStore = useLoadingStore();

    const isLogged = computed(() => !!state.token);

    function setToken(newToken) {
      state.token = newToken;
      localStorage.setItem('authToken', newToken);
    }

    async function LoginUser(credentials) {
      loadingStore.startLoading();
      try {
        const response = await authService.LoginUser(credentials);
        setToken(response.access);
        return response;
      } catch (error) {
        console.error('Erro no login:', error);
        throw error;
      } finally {
        loadingStore.stopLoading();
      }
    }

    function LogoutUser() {
      state.token = null;
      isLogged.value = false;
      localStorage.removeItem('authToken');
    }

    async function ForgotPasswordUser(email) {
      loadingStore.startLoading();
      try {
        const response = await authService.ForgotPasswordUser(email);
        return response;
      } catch (error) {
        console.error('Erro ao solicitar recuperação de senha:', error);
        throw error;
      } finally {
        loadingStore.stopLoading();
      }
    }

    async function ResetPasswordUser(reset_code, new_passoword) {
      loadingStore.startLoading();
      try {
        const response = await authService.ResetPasswordUser(reset_code, new_passoword); 
        return response;
      } catch (error) {
        console.error('Erro ao resetar a senha:', error);
        throw error;
      } finally {
        loadingStore.stopLoading();
      }
    }

    return { 
      state, 
      setToken, 
      LoginUser, 
      LogoutUser, 
      ForgotPasswordUser, 
      ResetPasswordUser, 
      isLogged 
    };
  });