import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { AlunoService } from '@/services'



export const useAlunoStore = defineStore('aluno', () => {
  const state = reactive({
    alunos: [],
    aluno: {},
    loading: false,
    error: null,
    connection: false,
  })
  const isLoading = computed(() => state.loading)
  const alunos = computed(() => state.alunos)
  const aluno = computed(() => state.aluno)

  
  const getAlunos = async () => {
    state.loading = true
    try {
      state.alunos = await AlunoService.getAlunos()
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
      state.connection = true
    }
  }

  const getAluno = async (id) => {
    state.loading = true
    try {
      console.log(id)
      const data = await AlunoService.getAluno(id)
      console.log(data)
      state.aluno = data
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  return {
    state,
    alunos,
    isLoading,
    getAlunos,
    getAluno,
    aluno
  }
})