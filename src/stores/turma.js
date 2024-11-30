import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import TurmaService from '@/services/TurmaService';
import { useLoadingStore } from '@/stores/loading';

export const useTurmaStore = defineStore('turma', () => {
  const state = reactive({
    turmas: [],
  });

  const turmas = computed(() => state.turmas);
  const loadingStore = useLoadingStore();

  const getAllTurmas = async () => {
    loadingStore.startLoading();
    try {
      const data = await TurmaService.getAllTurmas();
      state.turmas = data.results;
    } catch (error) {
      console.error('Erro ao buscar turmas:', error);
    } finally {
      loadingStore.stopLoading();
    }
  };

  return {
    turmas,
    getAllTurmas,
  };
});
