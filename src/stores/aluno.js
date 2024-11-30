import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import AlunoService from '@/services/AlunoService';
import { useLoadingStore } from '@/stores/loading';

export const useAlunoStore = defineStore('aluno', () => {
  const state = reactive({
    alunos: [],
    alunoSelecionado: null,
    error: null,
  });

  const alunos = computed(() => state.alunos);
  const alunoSelecionado = computed(() => state.alunoSelecionado);
  const error = computed(() => state.error);

  const loadingStore = useLoadingStore();

  const getAllAlunos = async () => {
    loadingStore.startLoading();
    try {
      const data = await AlunoService.getAllAlunos();
      state.alunos = data;
    } catch (err) {
      console.error('Erro ao buscar alunos:', err);
      state.error = err;
    } finally {
      loadingStore.stopLoading();
    }
  };

  const getAlunoById = async (id) => {
    loadingStore.startLoading();
    try {
      const data = await AlunoService.getAlunoById(id);
      state.alunoSelecionado = data;
    } catch (err) {
      console.error('Erro ao buscar aluno por ID:', err);
      state.error = err;
    } finally {
      loadingStore.stopLoading();
    }
  };

  const createAluno = async (alunoData) => {
    loadingStore.startLoading();
    try {
      await AlunoService.createAluno(alunoData);
      await getAllAlunos(); // Atualiza a lista após criar
    } catch (err) {
      console.error('Erro ao criar aluno:', err);
      state.error = err;
    } finally {
      loadingStore.stopLoading();
    }
  };

  const updateAluno = async (id, alunoData) => {
    loadingStore.startLoading();
    try {
      await AlunoService.updateAluno(id, alunoData);
      await getAllAlunos(); 
    } catch (err) {
      console.error('Erro ao atualizar aluno:', err);
      state.error = err;
    } finally {
      loadingStore.stopLoading();
    }
  };

  const deleteAluno = async (id) => {
    loadingStore.startLoading();
    try {
      await AlunoService.deleteAluno(id);
      await getAllAlunos(); 
    } catch (err) {
      console.error('Erro ao deletar aluno:', err);
      state.error = err;
    } finally {
      loadingStore.stopLoading();
    }
  };

  const getAlunosComNotaBaixa = async () => {
    loadingStore.startLoading();
    try {
      const data = await AlunoService.getAlunosComNotaBaixa();
      state.alunos = data;
    } catch (err) {
      console.error('Erro ao buscar alunos com nota baixa:', err);
      state.error = err;
    } finally {
      loadingStore.stopLoading();
    }
  };

  const getAlunosComOcorrencias = async () => {
    loadingStore.startLoading();
    try {
      const data = await AlunoService.getAlunosComOcorrencias();
      state.alunos = data;
    } catch (err) {
      console.error('Erro ao buscar alunos com ocorrências:', err);
      state.error = err;
    } finally {
      loadingStore.stopLoading();
    }
  };

  const getAlunosPorNome = async (nome) => {
    loadingStore.startLoading();
    try {
      const data = await AlunoService.getAlunosPorNome(nome);
      state.alunos = data;
    } catch (err) {
      console.error('Erro ao buscar alunos por nome:', err);
      state.error = err;
    } finally {
      loadingStore.stopLoading();
    }
  };

  const getAlunosPorAno = async (ano) => {
    loadingStore.startLoading();
    try {
      const data = await AlunoService.getAlunosPorAno(ano);
      state.alunos = data;
    } catch (err) {
      console.error('Erro ao buscar alunos por ano:', err);
      state.error = err;
    } finally {
      loadingStore.stopLoading();
    }
  };

  const getAlunosPorTrimestre = async (trimestreId) => {
    loadingStore.startLoading();
    try {
      const data = await AlunoService.getAlunosPorTrimestre(trimestreId);
      state.alunos = data;
    } catch (err) {
      console.error('Erro ao buscar alunos por trimestre:', err);
      state.error = err;
    } finally {
      loadingStore.stopLoading();
    }
  };

  return {
    alunos,
    alunoSelecionado,
    error,
    getAllAlunos,
    getAlunoById,
    createAluno,
    updateAluno,
    deleteAluno,
    getAlunosComNotaBaixa,
    getAlunosComOcorrencias,
    getAlunosPorNome,
    getAlunosPorAno,
    getAlunosPorTrimestre,
  };
});
