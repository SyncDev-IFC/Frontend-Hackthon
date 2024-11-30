import axios from "axios";

class AnotacaoService {
    async getAllAnotacaos() {
        const response = await axios.get('anotacoes/');
        return response.data;
    }

    async getAnotacaoById(id) {
        const response = await axios.get(`anotacoes/${id}`);
        return response.data;
    }

    async createAnotacao(anotacaoData) {
        const response = await axios.post('anotacoes/', anotacaoData);
        return response.data;
    }

    async updateAnotacao(id, anotacaoData) {
        const response = await axios.put(`anotacoes/${id}`, anotacaoData);
        return response.data;
    }

    async deleteAnotacao(id) {
        const response = await axios.delete(`anotacoes/${id}`);
        return response.data;
    }
}

export default new AnotacaoService();
