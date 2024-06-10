<template>
  <div id="app" class="container">
    <img src="@/assets/atech_logo.jpg" alt="ATECH Logo" class="logo">
    <h1>Gerenciador de Pessoas - ATECH</h1>
    <button @click="navigateTo('cadastro')" class="btn btn-primary">Cadastrar Usuário</button>
    <button @click="navigateTo('listagem')" class="btn btn-secondary">Listagem e Edição de Usuários</button>
    <router-view 
      :pessoas="pessoas" 
      @save-pessoa="addPessoa"
      @view-pessoa="selectPessoa" 
      @edit-pessoa="prepareEditPessoa" 
      @delete-pessoa="deletePessoa"
      :selected-pessoa="selectedPessoa"
      :is-editing="isEditing"
      @close-detail="closeDetail"
      @update-pessoa="updatePessoa"
      @cancel-edit="cancelEdit"
    />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      pessoas: JSON.parse(localStorage.getItem('pessoas')) || [],
      selectedPessoa: null,
      nextId: 1,
      isEditing: false
    };
  },
  methods: {
    navigateTo(page) {
      this.$router.push({ name: page });
    },
    addPessoa(pessoa) {
      pessoa.id = this.nextId++;
      this.pessoas.push(pessoa);
      this.saveToLocalStorage();
      this.navigateTo('listagem');
    },
    selectPessoa(pessoa) {
      this.selectedPessoa = pessoa;
      this.isEditing = false;
      this.$router.push({ name: 'detalhes', params: { id: pessoa.id } });
    },
    prepareEditPessoa(pessoa) {
      this.selectedPessoa = { ...pessoa };
      this.isEditing = true;
      this.navigateTo('cadastro');
    },
    updatePessoa(pessoa) {
      const index = this.pessoas.findIndex(p => p.id === pessoa.id);
      if (index !== -1) {
        this.pessoas.splice(index, 1, pessoa);
      }
      this.saveToLocalStorage();
      this.selectedPessoa = null;
      this.isEditing = false;
      this.navigateTo('listagem');
    },
    closeDetail() {
      this.selectedPessoa = null;
    },
    cancelEdit() {
      this.selectedPessoa = null;
      this.isEditing = false;
      this.navigateTo('listagem');
    },
    deletePessoa(id) {
      this.pessoas = this.pessoas.filter(p => p.id !== id);
      if (this.selectedPessoa && this.selectedPessoa.id === id) {
        this.selectedPessoa = null;
      }
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem('pessoas', JSON.stringify(this.pessoas));
    }
  }
};
</script>

<style scoped>
/* Estilos personalizados */
body {
  background-color: #2c2c2c;
  font-family: Arial, sans-serif;
  color: #f8f9fa;
}
.container {
  max-width: 800px;
  margin-top: 50px;
  text-align: center;
  background-color: #3a3a3a;
  border-radius: 10px;
  padding: 40px 20px 20px;
  position: relative;
}
h1 {
  margin-bottom: 50px;
  padding-left: 120px; /* Espaçamento para acomodar a logo */
}
.btn {
  margin: 20px;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 10px;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: white;
  color: black;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
}
.details-card {
  border: 1px solid #dee2e6;
  border-radius: 4px;
  padding: 15px;
  background-color: #fff;
}
.feedback {
  margin-top: 10px;
}
.loading-spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border-left-color: #09f;
  animation: spin 1s linear infinite;
}
.table {
  background-color: #3a3a3a;
  color: #f8f9fa;
  border-radius: 10px;
}
.table th, .table td {
  vertical-align: middle;
}
.table .btn {
  margin: 0 2px;
}
.alert {
  margin-top: 10px;
}
.logo {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100px;
  height: auto;
}
input {
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  width: 100%;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>