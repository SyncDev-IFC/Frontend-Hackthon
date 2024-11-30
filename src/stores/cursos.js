import { reactive, computed } from "vue";
import CursoService from "../services/cursos.js";
import { defineStore } from "pinia";

const cursoService = new CursoService();

export const useCursoStore = defineStore('curso',() => {
    const state = reactive({
        cursos: [],
        loading: false,
        error: null,
        conection: false,
        curso: [],
    })
    const cursos = computed(() => state.cursos)
    const isLoading = computed(() => state.loading)
    const error = computed(() => state.error)
    const conection = computed(() => state.conection)
    const curso = computed(() => state.curso)

    const getCursos = async () => {
        state.loading = true
        try{
            state.cursos = await cursoService.getCursos()
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
        }
    }

    const addCurso = async (curso) => {
        state.loading = true
        try{
            state.curso = await cursoService.addCurso(curso)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
        }
    }

    const deleteCurso = async (id) => {
        state.loading = true
        try{
            state.curso = await cursoService.deleteCurso(id)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
        }
    }

    const getCurso = async (id) => {
        state.loading = true
        try{
            state.curso = await cursoService.getCurso(id)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
        }
    }


    return{
        state,
        cursos,
        isLoading,
        error,
        conection,
        curso,
        getCursos,
        addCurso,
        deleteCurso,
        getCurso
    }
})