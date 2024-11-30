import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { TurmaService } from '@/services'  // Assuming you have a TurmaService similar to AlunoService

export const useTurmaStore = defineStore('turma', () => {
  const state = reactive({
    turmas: [],  // Instead of alunos, you now have turmas
    turma: {},   // Single turma data
    loading: false,
    error: null,
    connection: false,
  })

  // Computed properties for easy access
  const isLoading = computed(() => state.loading)
  const turmas = computed(() => state.turmas)
  const turma = computed(() => state.turma)

  // Action to get all turmas
  const getTurmas = async () => {
    state.loading = true
    try {
      state.turmas = await TurmaService.getTurmas()  // Adjusted to use TurmaService
      console.log(state.turmas)
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
      state.connection = true
    }
  }

  // Action to get a specific turma by ID
  const getTurma = async (id) => {
    state.loading = true
    try {
      console.log(id)
      const data = await TurmaService.getTurma(id)  // Adjusted to use TurmaService
      console.log(data)
      state.turma = data
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  return {
    state,
    turmas,    // Now accessing turmas
    isLoading,
    getTurmas,
    getTurma,  // Action to fetch a specific turma
    turma      // Access to a specific turma
  }
})
