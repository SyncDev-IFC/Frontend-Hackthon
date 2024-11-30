import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import NotaService from '@/services/nota';
import { useLoadingStore } from '@/stores/loading';

export const useNotaStore = defineStore('nota', () => {
  const state = reactive({
    notas: [],
  });

  const notas = computed(() => state.notas);
  const loadingStore = useLoadingStore();

  const getAllNotas = async () => {
    loadingStore.startLoading();
    try {
      const data = await NotaService.getAllNotas();
      state.notas = data.results;
    } catch (error) {
      console.error('Erro ao buscar notas:', error);
    } finally {
      loadingStore.stopLoading();
    }
  };

  const createNota = async (novaNota) => {
    try {
      const response = await NotaService.createNota(novaNota);
      state.notas.push(response);
    } catch (error) {
      console.error('Erro ao criar nota:', error);
      throw error;
    }
  };

  return {
    notas,
    getAllNotas,
    createNota
  };
});
