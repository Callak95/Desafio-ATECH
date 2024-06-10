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
        <input type="text" id="telefone" v-model="pessoa.telefone" @input="applyPhoneMask" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">{{ isEditing ? 'Salvar' : 'Cadastrar' }}</button>
      <button type="button" class="btn btn-secondary" @click="cancel">Voltar</button>
    </form>
    <div v-if="message" :class="['alert', `alert-${message.type}`]" role="alert">
      {{ message.text }}
    </div>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'PessoaForm',
  props: ['selectedPessoa', 'isEditing'],
  data() {
    return {
      pessoa: this.selectedPessoa ? { ...this.selectedPessoa } : { nome: '', email: '', telefone: '' },
      message: null
    };
  },
  methods: {
    savePessoa() {
      if (this.isEditing) {
        api.atualizarPessoa(this.pessoa.id, this.pessoa)
          .then(() => {
            this.$emit('update-pessoa', this.pessoa);
            this.message = { type: 'success', text: 'Usuário atualizado com sucesso' };
          })
          .catch(() => {
            this.message = { type: 'error', text: 'Erro ao atualizar usuário' };
          });
      } else {
        api.criarPessoa(this.pessoa)
          .then(() => {
            this.$emit('save-pessoa', this.pessoa);
            this.message = { type: 'success', text: 'Usuário cadastrado com sucesso' };
          })
          .catch(() => {
            this.message = { type: 'error', text: 'Erro ao cadastrar usuário' };
          });
      }
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