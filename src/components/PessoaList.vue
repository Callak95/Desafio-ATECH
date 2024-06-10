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
  </div>
</template>

<script>
export default {
  name: 'PessoaList',
  props: ['pessoas', 'selectedPessoa'],
  methods: {
    viewPessoa(pessoa) {
      this.$emit('view-pessoa', pessoa);
    },
    editPessoa(pessoa) {
      this.$emit('edit-pessoa', pessoa);
    },
    deletePessoa(id) {
      this.$emit('delete-pessoa', id);
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
</style>