<template>
  <div>
    <h2>Listagem e Edição de Usuários</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pessoa in pessoas" :key="pessoa.id">
          <td>{{ pessoa.nome }}</td>
          <td>{{ pessoa.email }}</td>
          <td>
            <button class="btn btn-info" @click="viewPessoa(pessoa)">Ver</button>
            <button class="btn btn-warning" @click="editPessoa(pessoa)">Editar</button>
            <button class="btn btn-danger" @click="deletePessoa(pessoa.id)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="selectedPessoa" class="details-card">
      <h3>Detalhes do Usuário</h3>
      <p><strong>Nome:</strong> {{ selectedPessoa.nome }}</p>
      <p><strong>Email:</strong> {{ selectedPessoa.email }}</p>
      <p><strong>Telefone:</strong> {{ selectedPessoa.telefone }}</p>
      <button class="btn btn-secondary" @click="closeDetail">Fechar</button>
    </div>
    <div v-if="message" :class="['alert', `alert-${message.type}`]" role="alert">
      {{ message.text }}
    </div>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'PessoaList',
  props: ['pessoas', 'selectedPessoa'],
  data() {
    return {
      message: null
    };
  },
  methods: {
    viewPessoa(pessoa) {
      this.$emit('view-pessoa', pessoa);
    },
    editPessoa(pessoa) {
      this.$emit('edit-pessoa', pessoa);
    },
    deletePessoa(id) {
      api.excluirPessoa(id)
        .then(() => {
          this.$emit('delete-pessoa', id);
          this.message = { type: 'success', text: 'Usuário excluído com sucesso' };
          setTimeout(() => {
            this.message = null;
            this.$emit('update-pessoas');
          }, 2000);
        })
        .catch(() => {
          setTimeout(() => {
            this.message = null;
            this.$emit('update-pessoas');
          }, 2000);
        });
    },
    closeDetail() {
      this.$emit('close-detail');
    }
  }
};
</script>

<style scoped>
.details-card {
  background-color: #3a3a3a;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}
.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}
.alert-error {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
</style>