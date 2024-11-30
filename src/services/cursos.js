import axios from "axios";

class CursoService{
    async getCursos(){
        try{
            const { data } = await axios.get("api/cursos/")
            return data.results
        }
        catch(error){
            console.log(error)
        }
    }

    async addCurso(curso){
        try{
            const { data } = await axios.post("api/cursos/", curso)
            return data.results
        }
        catch(error){
            console.log(error)
        }
    }
    async deleteCurso(id){
        try{
            const { data } = await axios.delete(`api/cursos/${id}`)
            return data.results
        }
        catch(error){
            console.log(error)
        }
    }
    async updateCurso(curso){
        try{
            const { data } = await axios.put(`api/cursos/${curso.id}`, curso)
            return data.results
        }
        catch(error){
            console.log(error)
        }
    }
    async getCurso(id){
        try{
            const { data } = await axios.get(`api/cursos/${id}`)
            return data.results
        }
        catch(error){
            console.log(error)
        }
    }
}

export default CursoService;