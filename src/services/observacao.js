import axios from "axios";

class ObservacoesService {
    // Obter todas as observações
    async getAllObservacoess() {
        const response = await axios.get('observacoes/');
        return response.data;
    }

    // Obter uma observação específica por ID
    async getObservacaoById(id) {
        const response = await axios.get(`observacoes/${id}`);
        return response.data;
    }

    // Criar uma nova observação
    async createObservacao(observacaoData) {
        const response = await axios.post('observacoes/', observacaoData);
        return response.data;
    }

    // Atualizar uma observação existente
    async updateObservacao(id, observacaoData) {
        const response = await axios.put(`observacoes/${id}`, observacaoData);
        return response.data;
    }

    // Deletar uma observação
    async deleteObservacao(id) {
        const response = await axios.delete(`observacoes/${id}`);
        return response.data;
    }
}

export default new ObservacoesService();
