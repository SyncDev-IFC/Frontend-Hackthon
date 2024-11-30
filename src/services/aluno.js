import axios from "axios";

class AlunoService {
    async getAlunos() {
        const {data} = await axios.get('alunos/');
        console.log(data)
        return data.results;
    }

    async getAluno(id) {
        const { data } = await axios.get(`alunos/${id}`);
        return data;
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
