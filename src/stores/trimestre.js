import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import TrimestreService from '@/services/TrimestreService';
import { useLoadingStore } from '@/stores/loading';

export const useTrimestreStore = defineStore('trimestre', () => {
  const state = reactive({
    trimestres: [],
  });

  const trimestres = computed(() => state.trimestres);
  const loadingStore = useLoadingStore();

  const getAllTrimestres = async () => {
    loadingStore.startLoading();
    try {
      const data = await TrimestreService.getAllTrimestres();
      state.trimestres = data.results;
    } catch (error) {
      console.error('Erro ao buscar trimestres:', error);
    } finally {
      loadingStore.stopLoading();
    }
  };

  return {
    trimestres,
    getAllTrimestres,
  };
});
