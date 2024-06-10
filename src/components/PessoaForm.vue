<template>
  <div>
    <h2>{{ isEditing ? 'Editar Usuário' : 'Cadastrar Usuário' }}</h2>
    <form @submit.prevent="savePessoa">
      <div class="form-group">
        <label for="nome">Nome Completo:</label>
        <input type="text" id="nome" v-model="pessoa.nome" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="pessoa.email" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="telefone">Telefone:</label>
        <input type="text" id="telefone" v-model="pessoa.telefone" @input="applyPhoneMask" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">{{ isEditing ? 'Salvar' : 'Cadastrar' }}</button>
      <button type="button" class="btn btn-secondary" @click="cancel">Voltar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PessoaForm',
  props: ['selectedPessoa', 'isEditing'],
  data() {
    return {
      pessoa: this.selectedPessoa ? { ...this.selectedPessoa } : { nome: '', email: '', telefone: '' }
    };
  },
  methods: {
    savePessoa() {
      this.$emit(this.isEditing ? 'update-pessoa' : 'save-pessoa', this.pessoa);
    },
    cancel() {
      this.$emit('cancel-edit');
    },
    applyPhoneMask() {
      const x = this.pessoa.telefone.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
      this.pessoa.telefone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    }
  }
};
</script>

<style scoped>
.form-group {
  margin-bottom: 15px;
}
input {
  border-radius: 5px;
}
</style>