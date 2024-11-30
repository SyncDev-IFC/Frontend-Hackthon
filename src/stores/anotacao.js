import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import AnotacaoService from '@/services/AnotacaoService';
import { useLoadingStore } from '@/stores/loading';

export const useAnotacaoStore = defineStore('anotacao', () => {
  const state = reactive({
    anotacoes: [],
  });

  const anotacoes = computed(() => state.anotacoes);
  const loadingStore = useLoadingStore();

  const getAllAnotacoes = async () => {
    loadingStore.startLoading();
    try {
      const data = await AnotacaoService.getAllAnotacoes();
      state.anotacoes = data.results;
    } catch (error) {
      console.error('Erro ao buscar anotações:', error);
    } finally {
      loadingStore.stopLoading();
    }
  };

  return {
    anotacoes,
    getAllAnotacoes,
  };
});
