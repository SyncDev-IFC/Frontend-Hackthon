import axios from "axios";

class TurmaService {
    // Obter todas as turmas
    async getTurmas() {
        const {data} = await axios.get('turmas/');
        console.log(data)
        return data.results;
    }

    // Obter uma turma específica por ID
    async getTurma(id) {
        const { data } = await axios.get(`turmas/${id}`);
        return data;
    }

    // Criar uma nova turma
    async createTurma(turmaData) {
        const response = await axios.post('turmas/', turmaData);
        return response.data;
    }

    // Atualizar uma turma existente
    async updateTurma(id, turmaData) {
        const response = await axios.put(`turmas/${id}`, turmaData);
        return response.data;
    }

    // Deletar uma turma
    async deleteTurma(id) {
        const response = await axios.delete(`turmas/${id}`);
        return response.data;
    }
}

export default new TurmaService();
