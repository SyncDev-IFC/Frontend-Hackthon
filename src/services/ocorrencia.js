import axios from "axios";

class OcorrenciaService {
    // Obter todas as ocorrências
    async getAllOcorrencias() {
        const response = await axios.get('ocorrencias/');
        return response.data;
    }

    // Obter uma ocorrência específica por ID
    async getOcorrenciaById(id) {
        const response = await axios.get(`ocorrencias/${id}`);
        return response.data;
    }

    // Criar uma nova ocorrência
    async createOcorrencia(ocorrenciaData) {
        const response = await axios.post('ocorrencias/', ocorrenciaData);
        return response.data;
    }

    // Atualizar uma ocorrência existente
    async updateOcorrencia(id, ocorrenciaData) {
        const response = await axios.put(`ocorrencias/${id}`, ocorrenciaData);
        return response.data;
    }

    // Deletar uma ocorrência
    async deleteOcorrencia(id) {
        const response = await axios.delete(`ocorrencias/${id}`);
        return response.data;
    }
}

export default new OcorrenciaService();
