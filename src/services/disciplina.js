import axios from "axios";

class DisciplinaService {
    // Obter todas as disciplinas
    async getAllDisciplinas() {
        const response = await axios.get('disciplinas/');
        return response.data;
    }

    // Obter uma disciplina por ID
    async getDisciplinaById(id) {
        const response = await axios.get(`disciplinas/${id}`);
        return response.data;
    }

    // Criar uma nova disciplina
    async createDisciplina(disciplinaData) {
        const response = await axios.post('disciplinas/', disciplinaData);
        return response.data;
    }

    // Atualizar uma disciplina existente
    async updateDisciplina(id, disciplinaData) {
        const response = await axios.put(`disciplinas/${id}`, disciplinaData);
        return response.data;
    }

    // Deletar uma disciplina
    async deleteDisciplina(id) {
        const response = await axios.delete(`disciplinas/${id}`);
        return response.data;
    }
}

export default new DisciplinaService();
