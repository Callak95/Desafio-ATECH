import { createRouter, createWebHistory } from 'vue-router';
import PessoaForm from '@/components/PessoaForm.vue';
import PessoaList from '@/components/PessoaList.vue';

const routes = [
  {
    path: '/',
    redirect: '/listagem'
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: PessoaForm
  },
  {
    path: '/listagem',
    name: 'listagem',
    component: PessoaList
  },
  {
    path: '/detalhes/:id',
    name: 'detalhes',
    component: PessoaList,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;