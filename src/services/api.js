import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  listarPessoas() {
    return apiClient.get('/pessoas');
  },
  obterPessoa(id) {
    return apiClient.get(`/pessoas/${id}`);
  },
  criarPessoa(pessoa) {
    return apiClient.post('/pessoas', pessoa);
  },
  atualizarPessoa(id, pessoa) {
    return apiClient.put(`/pessoas/${id}`, pessoa);
  },
  excluirPessoa(id) {
    return apiClient.delete(`/pessoas/${id}`);
  }
};