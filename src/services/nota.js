import axios from "axios";

class NotaService {
    // Obter todas as notas
    async getAllNotas() {
        const response = await axios.get('notas/');
        return response.data;
    }

    // Obter uma nota por ID
    async getNotaById(id) {
        const response = await axios.get(`notas/${id}`);
        return response.data;
    }

    // Criar uma nova nota
    async createNota(notaData) {
        const response = await axios.post('notas/', notaData);
        return response.data;
    }

    // Atualizar uma nota existente
    async updateNota(id, notaData) {
        const response = await axios.put(`notas/${id}`, notaData);
        return response.data;
    }

    // Deletar uma nota
    async deleteNota(id) {
        const response = await axios.delete(`notas/${id}`);
        return response.data;
    }
}

export default new NotaService();
