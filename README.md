
# Desafio Fullstack - Node.js e Angular

## Sobre o Projeto

O **Desafio Fullstack** é uma aplicação para gerenciamento de **Países**, **Pontos Turísticos** e **Comentários**. A aplicação oferece um CRUD completo para essas entidades e utiliza as tecnologias **Angular** no frontend e **Node.js** no backend. O banco de dados é configurado com **MySQL** utilizando **Docker** para facilitar a inicialização do ambiente.

---

## Tecnologias Utilizadas

- **Frontend:** Angular com PO-UI
- **Backend:** Node.js com Express.js
- **Banco de Dados:** MySQL (configurado via Docker)
- **Outras Ferramentas e Bibliotecas:**
  - Sequelize (ORM para o banco de dados)
  - Docker (para o banco de dados MySQL)
  - PO-UI (Design System para o frontend)
  - Nginx (para servir o frontend em produção)

---

## Instruções para Inicializar o Projeto

### 1. Clonar o Repositório

Clone o repositório para a sua máquina local usando o comando:

```bash
git clone https://github.com/seu-usuario/desafio-fullstack-node-angular.git
```

Entre na pasta do projeto:

```bash
cd desafio-fullstack-node-angular
```

---

### 2. Inicializar o Projeto

O comando principal irá configurar o banco de dados (via Docker), iniciar o backend e o frontend automaticamente.

Execute o seguinte comando:

```bash
npm start
```

---

### 3. Acessar a Aplicação

Após a inicialização:

- **Frontend:** Acesse em `http://localhost:4200`.
- **Backend:** A API estará disponível em `http://localhost:3000`.

---

## Funcionalidades

### Países
- Cadastrar, editar, listar e excluir países.

### Pontos Turísticos
- Cadastrar pontos turísticos associados a países.
- Visualizar detalhes do ponto turístico, incluindo cidade, melhor estação e resumo.

### Comentários
- Adicionar e visualizar comentários associados a pontos turísticos.

---

## Observações

- Certifique-se de ter o **Docker** instalado e rodando para que o banco de dados seja configurado corretamente.
- Não é necessário configurar manualmente o banco ou iniciar o frontend/backend separadamente. O comando `npm start` faz tudo automaticamente.

---

## Autor
Feito com ❤️ por **Julio Rugolo**. Sinta-se à vontade para contribuir! 😊
