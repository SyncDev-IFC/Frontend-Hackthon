import axios from "axios";

class AlunoService {
    async getAllAlunos() {
        const response = await axios.get('alunos/');
        return response.data;
    }

    async getAlunoById(id) {
        const response = await axios.get(`alunos/${id}`);
        return response.data;
    }

    async createAluno(alunoData) {
        const response = await axios.post('alunos/', alunoData);
        return response.data;
    }

    async updateAluno(id, alunoData) {
        const response = await axios.put(`alunos/${id}`, alunoData);
        return response.data;
    }

    async deleteAluno(id) {
        const response = await axios.delete(`alunos/${id}`);
        return response.data;
    }

    async getAlunosComNotaBaixa() {
        const response = await axios.get('alunos/inferior_seis/');
        return response.data;
    }

    async getAlunosComOcorrencias() {
        const response = await axios.get('alunos/com_ocorrencias/');
        return response.data;
    }

    async getAlunosPorNome(nome) {
        const response = await axios.get('alunos/filtrar_por_nome', { params: { nome } });
        return response.data;
    }
    
    async getAlunosPorAno(ano) {
        const response = await axios.get('alunos/por_ano', { params: { ano } });
        return response.data;
    }

    async getAlunosPorTrimestre(trimestreId) {
        const response = await axios.get('alunos/por_trimestre', { params: { trimestreId } });
        return response.data;
    }
}

export default new AlunoService();
