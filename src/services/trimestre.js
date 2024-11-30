import axios from "axios";

class TrimestreService {
    // Obter todos os trimestres
    async getAllTrimestres() {
        const response = await axios.get('trimestres/');
        return response.data;
    }

    // Obter um trimestre específico por ID
    async getTrimestreById(id) {
        const response = await axios.get(`trimestres/${id}`);
        return response.data;
    }

    // Criar um novo trimestre
    async createTrimestre(trimestreData) {
        const response = await axios.post('trimestres/', trimestreData);
        return response.data;
    }

    // Atualizar um trimestre existente
    async updateTrimestre(id, trimestreData) {
        const response = await axios.put(`trimestres/${id}`, trimestreData);
        return response.data;
    }

    // Deletar um trimestre
    async deleteTrimestre(id) {
        const response = await axios.delete(`trimestres/${id}`);
        return response.data;
    }
}

export default new TrimestreService();
