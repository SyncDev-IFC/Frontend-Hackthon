import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';
import ConselhoService from '@/services/conselho.js';  
import { useLoadingStore } from '@/stores/loading';

export const useConselhoStore = defineStore('conselho', () => {
  const state = reactive({
    conselho: [],  
  });

  const loadingStore = useLoadingStore();

  const conselho = computed(() => state.conselho);

  const iniciarConselho = async (turmaId, trimestreId, dataFim) => {
    loadingStore.startLoading();
    try {
      const data = await ConselhoService.iniciarConselho(turmaId, trimestreId, dataFim);
      state.conselho = data;  
    } catch (error) {
      console.error('Erro ao iniciar conselho:', error);
    } finally {
      loadingStore.stopLoading();
    }
  };

  const encerrarConselho = async (turmaId, trimestreId) => {
    loadingStore.startLoading();
    try {
      const data = await ConselhoService.encerrarConselho(turmaId, trimestreId);
      state.conselho = data;  
    } catch (error) {
      console.error('Erro ao encerrar conselho:', error);
    } finally {
      loadingStore.stopLoading();
    }
  };

  return {
    conselho,
    iniciarConselho,
    encerrarConselho,
  };
});
