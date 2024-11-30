import { api } from "../plugins/api";

class CursoService{
    async getCursos(){
        try{
            const { data } = await api.get("api/cursos/")
            return data.results
        }
        catch(error){
            console.log(error)
        }
    }

    async addCurso(curso){
        try{
            const { data } = await api.post("api/cursos/", curso)
            return data.results
        }
        catch(error){
            console.log(error)
        }
    }
    async deleteCurso(id){
        try{
            const { data } = await api.delete(`api/cursos/${id}`)
            return data.results
        }
        catch(error){
            console.log(error)
        }
    }
    async updateCurso(curso){
        try{
            const { data } = await api.put(`api/cursos/${curso.id}`, curso)
            return data.results
        }
        catch(error){
            console.log(error)
        }
    }
    async getCurso(id){
        try{
            const { data } = await api.get(`api/cursos/${id}`)
            return data.results
        }
        catch(error){
            console.log(error)
        }
    }
}

export default CursoService;