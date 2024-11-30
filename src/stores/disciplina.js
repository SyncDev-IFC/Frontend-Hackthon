import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import DisciplinaService from '@/services/DisciplinaService';
import { useLoadingStore } from '@/stores/loading';

export const useDisciplinaStore = defineStore('disciplina', () => {
  const state = reactive({
    disciplinas: [],
  });

  const disciplinas = computed(() => state.disciplinas);
  const loadingStore = useLoadingStore();

  const getAllDisciplinas = async () => {
    loadingStore.startLoading();
    try {
      const data = await DisciplinaService.getAllDisciplinas();
      state.disciplinas = data.results;
    } catch (error) {
      console.error('Erro ao buscar disciplinas:', error);
    } finally {
      loadingStore.stopLoading();
    }
  };

  return {
    disciplinas,
    getAllDisciplinas,
  };
});
