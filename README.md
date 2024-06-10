```markdown
# Avaliação Técnica Atech - Embraer.

- [Funcionalidades](#funcionalidades)
- [Executar Aplicação](#executar-aplicação)
- [Endpoints da API Mockada](#endpoints-da-api-mockada)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)

### Funcionalidades

Desenvolvi um aplicativo usando o framework Vue.js para criar um CRUD que permite o cadastro, visualização, edição e exclusão de informações básicas de pessoas. Os requisitos são:

* [X] Cadastro de Pessoa:
  - O usuário deve poder adicionar uma nova pessoa fornecendo as seguintes informações:
    * Nome completo
    * E-mail
    * Telefone (opcional)

* [X] Listagem de Pessoas:
  - As pessoas cadastradas devem ser exibidas em uma lista, mostrando pelo menos o nome e o e-mail.

* [X] Visualização de Detalhes:
  - O usuário deve poder clicar em uma pessoa na lista para visualizar todos os detalhes cadastrados.

* [X] Edição de Pessoa:
  - O usuário deve poder editar as informações de uma pessoa cadastrada.

* [X] Exclusão de Pessoa:
  - O usuário deve poder excluir uma pessoa cadastrada.

### Executar Aplicação

Para iniciar a aplicação, siga os seguintes passos:

1. Clone o repositório:
```shell
git clone <https://github.com/Callak95/Desafio-EmbraerATECH.git>
cd <Desafio-EmbraerATECH>
```

2. Instale as dependências:
```shell
npm install
```

3. Execute a aplicação + JSON Server (mock):
```shell
npm run serve
npm run mock-api
```

### Endpoints da API Mockada

-  `GET /api/pessoas` - Listar todas as pessoas.
-  `GET /api/pessoas/{id}` - Recuperar uma pessoa específica por ID.
-  `POST /api/pessoas` - Criar uma nova pessoa.
-  `PUT /api/pessoas/{id}` - Atualizar uma pessoa por ID.
-  `DELETE /api/pessoas/{id}` - Excluir uma pessoa por ID.

### Tecnologias Utilizadas

-  **Vue.js**: Framework JavaScript utilizado para construção da interface web.
-  **Vue Router**: Biblioteca de roteamento para Vue.js.
-  **Bootstrap**: Biblioteca CSS para estilização.
-  **JSON Server**: Ferramenta para criação de uma API REST mockada.
-  **Postman**: Ferramenta utilizada para testar os endpoints da API.

#### Versões das Tecnologias

-   **Vue.js**: 3.4.1
-   **Vue Router**: 4.1.6
-   **Bootstrap**: 5.3.3
-   **JSON Server**: 0.17.0
-   **Postman**: 9.31.16