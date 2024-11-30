import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import OcorrenciaService from '@/services/OcorrenciaService';
import { useLoadingStore } from '@/stores/loading';

export const useOcorrenciaStore = defineStore('ocorrencia', () => {
  const state = reactive({
    ocorrencias: [],
  });

  const ocorrencias = computed(() => state.ocorrencias);
  const loadingStore = useLoadingStore();

  const getAllOcorrencias = async () => {
    loadingStore.startLoading();
    try {
      const data = await OcorrenciaService.getAllOcorrencias();
      state.ocorrencias = data.results;
    } catch (error) {
      console.error('Erro ao buscar ocorrências:', error);
    } finally {
      loadingStore.stopLoading();
    }
  };

  return {
    ocorrencias,
    getAllOcorrencias,
  };
});
