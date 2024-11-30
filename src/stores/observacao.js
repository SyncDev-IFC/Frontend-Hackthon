import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import ObservacoesService from '@/services/ObservacoesService';
import { useLoadingStore } from '@/stores/loading';

export const useObservacoesStore = defineStore('observacoes', () => {
  const state = reactive({
    observacoes: [],
  });

  const observacoes = computed(() => state.observacoes);
  const loadingStore = useLoadingStore();

  const getAllObservacoes = async () => {
    loadingStore.startLoading();
    try {
      const data = await ObservacoesService.getAllObservacoess();
      state.observacoes = data.results;
    } catch (error) {
      console.error('Erro ao buscar observações:', error);
    } finally {
      loadingStore.stopLoading();
    }
  };

  return {
    observacoes,
    getAllObservacoes,
  };
});
