import axios from 'axios';

class ConselhoService {
  async iniciarConselho(turmaId, trimestreId, dataFim) {
    try {
      const response = await axios.post('/api/conselhos/iniciar/', {
        turma_id: turmaId,
        trimestre_id: trimestreId,
        data_fim: dataFim,
      });
      return response.data;  
    } catch (error) {
      console.error('Erro ao iniciar conselho:', error);
      throw error;
    }
  }

  async encerrarConselho(turmaId, trimestreId) {
    try {
      const response = await axios.post('/api/conselhos/encerrar/', {
        turma_id: turmaId,
        trimestre_id: trimestreId,
      });
      return response.data;  
    } catch (error) {
      console.error('Erro ao encerrar conselho:', error);
      throw error;
    }
  }
}

export default new ConselhoService();
